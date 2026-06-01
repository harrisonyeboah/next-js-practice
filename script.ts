import { AccountType } from "./generated/prisma/enums";
import { prisma } from "./lib/prisma";


async function main() {
  // Create a new user with a post
  /*
  const user = await prisma.customer.create({
    data: {
      firstName: "John",
      lastName: "Yeboah",
    },
    include: {
      accounts: false,
    },
  });
  
  console.log("Created Customer:", user);
    */

  // Create all accounts with these ids 

  const id =  [1, 2, 3, 4, 5]

  
  const promises = id.map((eachId) => {
    const emailValue = eachId + Math.floor(Math.random() * 50000) + 1;
    return prisma.account.create({
        data: {
            balance: 500,
            email: `${emailValue}world@gmail.com`,
            customerId: eachId, 
            accountType: AccountType.CHECKINGS, 
            accountNumber: Math.floor(Math.random() * (999999 - 100000 + 1) + 100000)
        }
    })
  })

  const results = await Promise.all(promises);

  // Fetch all users with their posts
  const allUsers = await prisma.account.findMany({

  });
  console.log("All customers:", JSON.stringify(allUsers, null, 2));
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });