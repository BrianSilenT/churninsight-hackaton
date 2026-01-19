import type { Client } from "../schemas/client.schema";

export const mockClients: Record<string, Client> = {
  "12345678": {
    id: "12345678",
    contractLength: 12,   
    paymentDelay: 2,
    usageFrequency: 15,
    subscriptionType: 2, 
  },
  "87654321": {
    id: "87654321",
    contractLength: 1,
    paymentDelay: 5,
    usageFrequency: 5,
    subscriptionType: 1,
  },
  "45678912": {
    id: "45678912",
    contractLength: 12,   
    paymentDelay: 0,
    usageFrequency: 25,
    subscriptionType: 1, 
    
  },
  "78912345": {
    id: "78912345",
    contractLength: 3,
    paymentDelay: 3,
    usageFrequency: 2,
    subscriptionType: 0,
   
  },
  "78914345": {
    id: "78914345",
    contractLength: 3, 
    paymentDelay: 3,
    usageFrequency: 10,
    subscriptionType: 1,
    
  },
  "78911345": {
    id: "78911345",
    contractLength: 3,
    paymentDelay: 6,
    usageFrequency: 1,
    subscriptionType: 3,
    
  },
  "78919345": {
    id: "78919345",
    contractLength: 1,
    paymentDelay: 3,
    usageFrequency: 12,
    subscriptionType: 1,
   
  },
  "72912345": {
    id: "72912345",
    contractLength: 12,
    paymentDelay: 3,
    usageFrequency: 8,
    subscriptionType: 1,
   
  },
};
