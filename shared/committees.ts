export interface Committee {
  id: string;
  name: string;
  fullName: string;
  agenda: string;
  members: string[];
}

export const COMMITTEES: Committee[] = [
  {
    id: "unga",
    name: "UNGA",
    fullName: "United Nations General Assembly",
    agenda: "Reincarnation of the Living Buddhas",
    members: [
      "China", "India", "Bhutan", "Nepal", "Mongolia", "Sri Lanka", "Myanmar", "Thailand", 
      "United States of America", "Canada", "Australia", "Russia", "France", "Germany", 
      "Cambodia", "Vietnam", "Laos", "Japan", "South Korea", "Pakistan", "Bangladesh", 
      "Kazakhstan", "Indonesia", "Malaysia", "Singapore", "North Korea", "Iran", 
      "United Kingdom", "Italy", "United Mexican States", "United Arab Emirates", 
      "Venezuela", "Israel", "Brunei", "Cyprus", "Saudi Arabia", "Vatican City", 
      "Tibet", "Palestine", "Malta"
    ]
  },
  {
    id: "unsc",
    name: "UNSC",
    fullName: "United Nations Security Council",
    agenda: "Tonkin Gulf Incident",
    members: [
      "France", "Republic of China (ROC)", "Soviet Union", "United Kingdom", 
      "United States of America", "Bolivia", "Brazil", "Czechoslovakia", "Ivory Coast", 
      "Morocco", "Norway", "People's Republic of China (PRC)", 
      "Democratic Republic of Vietnam", "Republic of Vietnam", "Laos", "Cambodia", 
      "India", "Pakistan", "Thailand", "Philippines", "Australia", "New Zealand", 
      "Canada", "Poland", "Japan"
    ]
  },
  {
    id: "ecosoc",
    name: "ECOSOC",
    fullName: "United Nations Economic and Social Council",
    agenda: "Repercussions of the Israeli Occupation on the Palestinian people",
    members: [
      "Algeria", "Antigua and Barbuda", "Armenia", "Australia", "Austria", "Argentina", 
      "Azerbaijan", "Bangladesh", "Botswana", "Brazil", "Cabo Verde", "Cameroon", 
      "Canada", "China", "Colombia", "Costa Rica", "Ivory Coast", "Djibouti", 
      "Dominican Republic", "Equatorial Guinea", "Finland", "France", "Haiti", "Italy", 
      "Japan", "Kenya", "Laos", "Liechtenstein", "Mauritania", "Mexico", "Nepal", 
      "Netherlands", "Nigeria", "Pakistan", "Paraguay", "Poland", "Qatar", "South Korea", 
      "Saudi Arabia", "Senegal", "Slovakia", "South Africa", "Spain", "Sri Lanka", 
      "Suriname", "Sweden", "Switzerland", "Turkey", "United Kingdom", "Tanzania", 
      "Uruguay", "Uzbekistan", "Zambia", "DRC", "Somalia", "Israel", "Palestine (PLO)", 
      "Lebanon", "Eritrea", "Iran", "Russia", "Ukraine", "Burkina Faso", "Ethiopia", 
      "Syria", "South Sudan", "Uganda", "Afghanistan", "Nauru", "Niger", 
      "United Arab Emirates", "Norway", "Central African Republic", "Jordan", 
      "Venezuela", "Myanmar", "Yemen", "Palau", "United States of America", "India"
    ]
  },
  {
    id: "unhrc",
    name: "UNHRC",
    fullName: "United Nations Human Rights Council",
    agenda: "Situation in Belarus, HRC Advisory Committee",
    members: [
      "Albania", "Algeria", "Bangladesh", "Belgium", "Benin", 
      "Bolivia (Plurinational State of)", "Brazil", "Bulgaria", "Burundi", "Chile", 
      "China", "Colombia", "Costa Rica", "Côte d'Ivoire", "Cuba", "Cyprus", "Czechia", 
      "Democratic Republic of the Congo", "Dominican Republic", "Ethiopia", "France", 
      "Gambia", "Georgia", "Germany", "Ghana", "Iceland", "Indonesia", "Japan", "Kenya", 
      "Kuwait", "Kyrgyzstan", "Malawi", "Maldives", "Marshall Islands", "Mexico", 
      "Morocco", "Netherlands (Kingdom of the)", "North Macedonia", "Qatar", 
      "Republic of Korea", "Romania", "South Africa", "Spain", "Sudan", "Switzerland", 
      "Thailand", "Vietnam", "United States of America", "Russian Federation", "Somalia", 
      "Australia", "New Zealand", "Poland", "Greece", "Yemen", "Belarus", "United Kingdom", 
      "Ukraine", "Israel", "Jordan", "Latvia", "Saudi Arabia", "United Arab Emirates", 
      "Egypt", "Serbia", "Hungary", "Lithuania", "Slovakia", "Nigeria"
    ]
  },
  {
    id: "loksabha",
    name: "Lok Sabha",
    fullName: "Lok Sabha (1976 of the 5th Lok Sabha)",
    agenda: "1976 of the 5th Lok Sabha",
    members: [
      "Indira Gandhi - Prime Minister",
      "Y. B. Chavan - Minister of External Affairs",
      "Jagjivan Ram - Minister of Agriculture and Irrigation",
      "Kamlapati Tripathi - Minister of Railways",
      "Bansi Lal - Minister of Defence",
      "Shri Raj Bahadur - Minister of Tourism and Civil Aviation",
      "H. R. Gokhale - Minister of Law and Justice",
      "Keshav Dev Malaviya - Minister of Petroleum",
      "T. A. Pai - Minister of Industry and Civil Supplies",
      "Kotha Raghuramaiah - Minister of Parliamentary Affairs",
      "K Brahmananda Reddi - Minister of Home Affairs",
      "Shankar Dayal Sharma - Minister of Communications",
      "C. Subramaniam - Minister of Finance",
      "Shri K. V. Raghunatha Reddy - Minister of Labour",
      "Prof S Nurul Hassan - Minister of Education, Social Welfare and Culture",
      "Dr. Narain Nirula Kailas - Member of Parliament",
      "Shri F. H. Mohsin - Deputy Minister in the Ministry of Home Affairs",
      "Shri Vidya Charan Shukla - Minister of Information and Broadcasting",
      "Shri H. K. L. Bhagat - Minister of State for Housing and Urban Affairs",
      "Shri Sanker Ghose - Minister of State for Planning",
      "Shri Shah Nawaz Khan - Minister of State for Agriculture & Irrigation",
      "Shri B. P. Maurya - Minister of State for Agriculture and Industry",
      "Shri Om Mehta - Minister of State for Parliamentary Affairs; Minister of State for Home Affairs",
      "Shri Vitthalrao Gadgil - Minister of State for Defence Production",
      "Shri Pranab Kumar Mukherjee - Minister of State for Finance",
      "Dr. V. A. Seyid Muhammad - Minister of State for Law, Justice and Company Affairs",
      "Shri Anant Prasad Sharma - Minister of State in the Ministry of Industry and Civil Supplies",
      "Shri. Dinesh Chandra Goswami - Member of Parliament",
      "Chapalendu Bhattacharyyia - Member of Parliament",
      "Shri H.M Trivedi - Minister of State for Ministry of State and Transport",
      "P. Ranganath Shenoy - Member of Parliament",
      "Badlu Ram Shukla - Member of Parliament",
      "Shri Arvind Netam - Deputy Minister in the Ministry of Education & Social Welfare and Dept. of Culture",
      "Shri Janaki Ballabh Patnaik - Deputy Minister in the Ministry of Defence",
      "Dr. Karan Singh - Minister of Health and Family Planning",
      "Shri. K. Hanumanthaiya - Member of Parliament",
      "Shri Ziaur Rahman Ansari - Deputy Minister in the Ministry of Petroleum",
      "Frank Anthony - Nominated Member of Parliament",
      "Ebrahim Sulaiman Sait - Member of Parliament",
      "Era Sezhiyan - Member of Parliament",
      "G. Viswanathan - Member of Parliament",
      "Samar Mukherjee - Member of Parliament",
      "Jagannath Rao Joshi - Member of Parliament",
      "Purushottam Ganesh Mavalankar - Member of Parliament",
      "Indrajit Gupta - Member of Parliament",
      "Parvathi Krishnan - Member of Parliament",
      "S M BANERJEE - Member of Parliament",
      "Duti Krushna Panda - Member of Parliament",
      "Hemendra Singh Banera - Member of Parliament",
      "K. Mayathever - Member of Parliament",
      "Aravinda Bala Pajanor - Member of Parliament",
      "PK Deo - Member of Parliament",
      "Ishaq Sambhali - Member of Parliament",
      "Shibbanlal Saksena - Member of Parliament",
      "Dr. Ranenendra Nath Sen - Member of Parliament",
      "Ram Hedaoo - Member of Parliament",
      "Jambuwant Bapurao Dhote - Member of Parliament",
      "N. Sreekantan Nair - Member of Parliament",
      "Shamim Ahmed Shamim - Member of Parliament",
      "HN Mukherjee - Member of Parliament",
      "Krishnan Manoharan - Member of Parliament"
    ]
  }
];

export function getCommitteeById(id: string): Committee | undefined {
  return COMMITTEES.find(c => c.id === id);
}
