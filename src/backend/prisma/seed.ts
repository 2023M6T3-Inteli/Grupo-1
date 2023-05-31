import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
    await prisma.user.create({
        data: {
            id: 1,
            fullName: 'Gustavo lion',
            email: 'gustavolion@dell.com',
            password: '123',
            phoneNumber: 123456789,
            mobileNumber: 1121,
            location: 'Remote Employee - Brazil, Rio Grande do Sul',
            job: 'Software Enginer',
            isManager: true,
            idManager: 1,
            rankPoints: 500,
        },
    });

    await prisma.user.create({
        data: {
            id: 2,
            fullName: 'laura silva',
            email: 'laurasilva@dell.com',
            password: '123456',
            phoneNumber: 123456789,
            mobileNumber: 1122,
            location: 'Remote Employee - Brazil, Rio Grande do Sul',
            job: 'Software Enginer',
            isManager: false,
            idManager: 1,
            rankPoints: 1000,
        },
    });
    await prisma.user.create({
        data: {
            id: 3,
            fullName: 'Fabricio Alcantara',
            email: 'fabricioalcantara@dell.com',
            password: '123456789',
            phoneNumber: 123456789,
            mobileNumber: 1123,
            location: 'Remote Employee - Brazil, Rio Grande do Sul',
            job: 'Software Enginer',
            isManager: false,
            idManager: 1,
            rankPoints: 750,
        },
    });
    await prisma.user.create({
        data: {
            id: 4,
            fullName: 'Daniel Cunha',
            email: 'danielcunha@dell.com',
            password: '987654321',
            phoneNumber: 123456789,
            mobileNumber: 1124,
            location: 'Remote Employee - Brazil, Rio Grande do Sul',
            job: 'Software Enginer',
            isManager: true,
            idManager: 2,
            rankPoints: 1500,
        },
    });
    await prisma.tag.create({
        data: {
            id: 1,
            name: 'HTML',
        },
    });

    await prisma.post.create({
        data: {
            description: "Lorem Ipsum",
            media: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
            idUser: 2
        }
    })

    await prisma.postTag.create({
        data: {
            idPost: 1,
            idTag: 1,
        }
    })

    await prisma.tag.create({
        data: {
            id: 2,
            name: 'CSS',
        },
    });

    await prisma.tag.create({
        data: {
            id: 3,
            name: 'JavaScript',
        },
    });

    await prisma.tag.create({
        data: {
            id: 4,
            name: 'Bootstrap',
        },
    });

    await prisma.tag.create({
        data: {
            id: 5,
            name: 'SQL',
        },
    });

    await prisma.tag.create({
        data: {
            id: 6,
            name: 'Java',
        },
    });

    await prisma.tag.create({
        data: {
            id: 7,
            name: 'C#',
        },
    });

    await prisma.tag.create({
        data: {
            id: 8,
            name: 'Python',
        },
    });

    await prisma.tag.create({
        data: {
            id: 9,
            name: 'Node.js',
        },
    });

    await prisma.tag.create({
        data: {
            id: 10,
            name: 'MongoDB',
        },
    });

    await prisma.tag.create({
        data: {
            id: 11,
            name: 'React',
        },
    });

    await prisma.role.create({
        data: {
            id: 1,
            name: 'Design UX',
        },
    });

    await prisma.role.create({
        data: {
            id: 2,
            name: 'Design UI',
        },
    });

    await prisma.role.create({
        data: {
            id: 3,
            name: 'Tech leader',
        },
    });

    await prisma.role.create({
        data: {
            id: 4,
            name: 'Front-end',
        },
    });

    await prisma.role.create({
        data: {
            id: 5,
            name: 'Back-end',
        },
    });
    await prisma.post.create({
        data: {

            description: "Aprenda Python",
            media: "https://youtu.be/4p7axLXXBGU",
            idUser: 1
        },
    });
    await prisma.postTag.create({
        data: {
            idPost: 2,
            idTag: 5,
        }
    })
    await prisma.postTag.create({
        data: {
            idPost: 2,
            idTag: 8,
        }
    })
    await prisma.post.create({
        data: {

            description: "Qual a diferença entre HTML e React?",
            media: "https://www.youtube.com/watch?v=idv0Bcdwo6I",
            idUser: 1
        },
    });
    await prisma.postTag.create({
        data: {
            idPost: 3,
            idTag: 1,
        }
    })
    await prisma.postTag.create({
        data: {
            idPost: 3,
            idTag: 11,
        }
    })
    await prisma.post.create({
        data: {

            description: "SQLite e suas vantagens?",
            media: "https://youtu.be/LaoIlFhULvY",
            idUser: 2
        },
    });
    await prisma.postTag.create({
        data: {
            idPost: 4,
            idTag: 1,
        }
    })
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
