import type { Express } from "express";
import { createServer, type Server } from "http";
import { Server as SocketIOServer } from "socket.io";
import { storage } from "./storage";

interface Speaker {
  id: string;
  name: string;
  representation: string;
}

interface RoomData {
  committeeId: string;
  queue: Speaker[];
  activeSpeaker: Speaker | null;
}

const rooms = new Map<string, RoomData>();

export async function registerRoutes(app: Express): Promise<Server> {
  const httpServer = createServer(app);

  const io = new SocketIOServer(httpServer, {
    cors: {
      origin: "*",
      methods: ["GET", "POST"],
    },
  });

  io.on("connection", (socket) => {
    console.log("Client connected:", socket.id);

    socket.on("joinRoom", ({ roomCode, committeeId }: { roomCode: string; committeeId: string }) => {
      socket.join(roomCode);
      
      if (!rooms.has(roomCode)) {
        rooms.set(roomCode, {
          committeeId,
          queue: [],
          activeSpeaker: null,
        });
      }

      const room = rooms.get(roomCode)!;
      socket.emit("queueUpdated", {
        queue: room.queue,
        activeSpeaker: room.activeSpeaker,
      });

      console.log(`Client ${socket.id} joined room ${roomCode}`);
    });

    socket.on("enterQueue", ({ roomCode, speaker }: { roomCode: string; speaker: Speaker }) => {
      const room = rooms.get(roomCode);
      if (!room) return;

      room.queue.push(speaker);
      io.to(roomCode).emit("queueUpdated", {
        queue: room.queue,
        activeSpeaker: room.activeSpeaker,
      });

      console.log(`Speaker ${speaker.name} entered queue in room ${roomCode}`);
    });

    socket.on("leaveQueue", ({ roomCode, speakerId }: { roomCode: string; speakerId: string }) => {
      const room = rooms.get(roomCode);
      if (!room) return;

      room.queue = room.queue.filter((s) => s.id !== speakerId);
      io.to(roomCode).emit("queueUpdated", {
        queue: room.queue,
        activeSpeaker: room.activeSpeaker,
      });

      console.log(`Speaker ${speakerId} left queue in room ${roomCode}`);
    });

    socket.on("callNext", ({ roomCode }: { roomCode: string }) => {
      const room = rooms.get(roomCode);
      if (!room || room.queue.length === 0) return;

      const nextSpeaker = room.queue.shift()!;
      room.activeSpeaker = nextSpeaker;

      io.to(roomCode).emit("queueUpdated", {
        queue: room.queue,
        activeSpeaker: room.activeSpeaker,
      });

      io.to(roomCode).emit("nextSpeaker", nextSpeaker);

      console.log(`Called next speaker: ${nextSpeaker.name} in room ${roomCode}`);
    });

    socket.on("removeSpeaker", ({ roomCode, speakerId }: { roomCode: string; speakerId: string }) => {
      const room = rooms.get(roomCode);
      if (!room) return;

      room.queue = room.queue.filter((s) => s.id !== speakerId);
      io.to(roomCode).emit("queueUpdated", {
        queue: room.queue,
        activeSpeaker: room.activeSpeaker,
      });

      console.log(`Removed speaker ${speakerId} from room ${roomCode}`);
    });

    socket.on("moveSpeaker", ({ roomCode, fromIndex, toIndex }: { roomCode: string; fromIndex: number; toIndex: number }) => {
      const room = rooms.get(roomCode);
      if (!room) return;

      const [speaker] = room.queue.splice(fromIndex, 1);
      room.queue.splice(toIndex, 0, speaker);

      io.to(roomCode).emit("queueUpdated", {
        queue: room.queue,
        activeSpeaker: room.activeSpeaker,
      });

      console.log(`Moved speaker in room ${roomCode} from ${fromIndex} to ${toIndex}`);
    });

    socket.on("resetQueue", ({ roomCode }: { roomCode: string }) => {
      const room = rooms.get(roomCode);
      if (!room) return;

      room.queue = [];
      room.activeSpeaker = null;

      io.to(roomCode).emit("queueUpdated", {
        queue: room.queue,
        activeSpeaker: room.activeSpeaker,
      });

      console.log(`Reset queue in room ${roomCode}`);
    });

    socket.on("disconnect", () => {
      console.log("Client disconnected:", socket.id);
    });
  });

  return httpServer;
}
