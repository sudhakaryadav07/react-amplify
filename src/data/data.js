const MESSAGES = [
    "Vow to stop worrying and start loving.",
    "Believe it’s possible to be at peace.",
    "One day or day one. It's your decision.",
    "Try to be a rainbow in someone else's cloud.",
    "You do not find the happy life. You make it.",
    "The most wasted of days is one without laughter.",
    "It is never too late to be what you might have been.",
    "You get what you give.",
    "Happiness is not by chance, but by choice.",
    "Life changes very quickly, if you let it."
];

const USER = [
    {
        firstName: "Julie",
        lastName: "Sweet",
        title: "CEO, Accenture",
        shortSummary: "Julie Sweet is an American business executive. She is chief executive officer of Accenture.",
        summary: "Julie Sweet is chief executive officer of Accenture and serves on the company’s board of directors.\
                    Prior to becoming CEO in September 2019, Julie served as chief executive officer of Accenture’s business in North America,\
                    the company’s largest geographic market. Previously, she was Accenture’s general counsel, secretary and chief compliance\
                     officer for five years. Prior to joining Accenture in 2010, Julie was a partner for 10 years in the law firm Cravath, Swaine & Moore LLP.\
                    Outside of Accenture, Julie is a leader on topics including innovation, technology’s impact on business, and inclusion and diversity.\
                    She is a member of the World Economic Forum's International Business Council, the Business Roundtable and the TechNet Executive Council.\
                    Julie also serves on the board of directors for Catalyst, the board of trustees for the Center for Strategic &\
                    International Studies and the board of trustees for the Marriott Foundation for People with Disabilities - Bridges\
                    from School to Work. In 2019, she was named to FORTUNE’s list of “Most Powerful Women” for the fourth consecutive year.\
                    Julie holds a Bachelor of Arts degree from Claremont McKenna College and a Juris Doctor from Columbia Law School.",
        interest: ['leadership', 'curiosity'],
        books: [{
            thumbnail: "https://books.google.com/books?id=iwiYGwAACAAJ&printsec=frontcover&img=1&zoom=5&sig=_L6ySKDAs-8gNK28c3NyFdO22ZM"
        },
        {
            thumbnail: "https://books.google.com/books?id=ezqe1hh91q4C&pg=PR3&img=1&zoom=5&sig=bBmzIAIiCtMcM7Ii7TUHycqqEWg"
        },
        {
            thumbnail: "http://books.google.com/books/content?id=nggnmAEACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api"
        },
        {
            thumbnail: "http://books.google.com/books/content?id=sJf1vQAACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api"
        },
        {
            thumbnail: "http://books.google.com/books/content?id=evuwdDLfAyYC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
        },
        {
            thumbnail: "http://books.google.com/books/content?id=74XNzF_al3MC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
        },
        {
            thumbnail: "http://books.google.com/books/content?id=jAUODAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
        },
        {
            thumbnail: "http://books.google.com/books/content?id=IOejDAAAQBAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api"
        },
        {
            thumbnail: "http://books.google.com/books/content?id=1wy49i-gQjIC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
        }
        ],
        videos: [
            {
                title: 'https://www.youtube.com/embed/fsHNP-v1PQ0'
            },
            {
                title: 'https://www.youtube.com/embed/mHx8RjbxbSw'
            },
            {
                title: 'https://www.youtube.com/embed/SPuxqbHWVA4'
            },
            {
                title: 'https://www.youtube.com/embed/XLc65U_t1Pk'
            }
        ]
    },
    {
        firstName: "Christine",
        lastName: "Lagarde",
        title: "President, European Central Bank",
        shortSummary: "Christine Madeleine Odette Lagarde is President of the European Central Bank.",
        interest: ['leadership', 'confidence', 'energy', 'generosity'],
        summary: "Christine Lagarde, (born January 1, 1956, Paris, France), French lawyer and politician who was the first woman to serve as France’s finance minister (2007–11)\
        as the managing director of the International Monetary Fund(IMF 2011–19), and as president of the European Central Bank(2019–).\
        Lagarde was educated in the United States and France. After graduating (1974) from the prestigious Holton-Arms girls’ college-preparatory\
         school in Bethesda, Maryland, she studied at the Law School of the University of Paris X-Nanterre, where she lectured after graduation before\
          going on to specialize in labour law, in which she obtained a postgraduate diploma (DESS). She also acquired a master’s degree in English.",
        books: [
            {
                thumbnail: "https://books.google.com/books?id=iwiYGwAACAAJ&printsec=frontcover&img=1&zoom=5&sig=_L6ySKDAs-8gNK28c3NyFdO22ZM"
            },
            {
                thumbnail: "https://books.google.com/books?id=ezqe1hh91q4C&pg=PR3&img=1&zoom=5&sig=bBmzIAIiCtMcM7Ii7TUHycqqEWg"
            },
            {
                thumbnail: "http://books.google.com/books/content?id=nggnmAEACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api"
            },
            {
                thumbnail: "http://books.google.com/books/content?id=sJf1vQAACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api"
            },
            {
                thumbnail: "http://books.google.com/books/content?id=evuwdDLfAyYC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
            },
            {
                thumbnail: "http://books.google.com/books/content?id=74XNzF_al3MC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
            },
            {
                thumbnail: "http://books.google.com/books/content?id=jAUODAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
            },
            {
                thumbnail: "http://books.google.com/books/content?id=IOejDAAAQBAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api"
            },
            {
                thumbnail: "http://books.google.com/books/content?id=1wy49i-gQjIC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
            }
        ],
        videos: [
            {
                title: 'https://www.youtube.com/embed/AQOTFMO65cY'
            },
            {
                title: 'https://www.youtube.com/embed/1IPjE2SPpXQ'
            },
            {
                title: 'https://www.youtube.com/embed/qvZ9ByRLX9U'
            }
        ]
    },
    {
        firstName: "Aileen",
        lastName: "Lee",
        title: "Founder, Cowboy Ventures",
        shortSummary: "Aileen Lee is a venture capital investor and a founder of Cowboy Ventures.",
        interest: ['leadership', 'curiosity'],
        summary: "Lee is the founder of Cowboy Ventures, a venture firm that has invested in startups like Bloom Energy, Dollar Shave Club and Rent the Runway.\
        A thirteen-year veteran of storied firm Kleiner Perkins Caufield & Byers, Lee left in 2012 to found her own firm, Cowboy Ventures.\
        Cowboy Ventures is one of the first VC firms to be launched by a woman. Lee has been vocal about the state of diversity in Silicon Valley.\
        The firm announced in 2018 it has raised Cowboy Ventures III, a $95 million fund dedicated to backing seed-stage technology startups.\
        Lee is a founding member of All Raise, which runs Female Founder Office Hours, a one-on-one mentorship series for female entrepreneurs and investors.",
        books: [
            {
                thumbnail: "https://books.google.com/books?id=iwiYGwAACAAJ&printsec=frontcover&img=1&zoom=5&sig=_L6ySKDAs-8gNK28c3NyFdO22ZM"
            },
            {
                thumbnail: "https://books.google.com/books?id=ezqe1hh91q4C&pg=PR3&img=1&zoom=5&sig=bBmzIAIiCtMcM7Ii7TUHycqqEWg"
            },
            {
                thumbnail: "http://books.google.com/books/content?id=nggnmAEACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api"
            },
            {
                thumbnail: "http://books.google.com/books/content?id=sJf1vQAACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api"
            },
            {
                thumbnail: "http://books.google.com/books/content?id=evuwdDLfAyYC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
            },
            {
                thumbnail: "http://books.google.com/books/content?id=74XNzF_al3MC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
            },
            {
                thumbnail: "http://books.google.com/books/content?id=jAUODAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
            },
            {
                thumbnail: "http://books.google.com/books/content?id=IOejDAAAQBAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api"
            },
            {
                thumbnail: "http://books.google.com/books/content?id=1wy49i-gQjIC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
            }
        ],
        videos: [
            {
                title: 'https://www.youtube.com/embed/vrBhB48qPUM'
            },
            {
                title: 'https://www.youtube.com/embed/GDrlH0kQVwo'
            },
            {
                title: 'https://www.youtube.com/embed/MneV1InryjM'
            }
        ]
    },
    {
        firstName: "Scarlett",
        lastName: "Johansson",
        title: "Actress And Singer",
        shortSummary: "Scarlett Johansson is a world's highest-paid actress actress and singer.",
        interest: ['acting', 'singing', 'musician'],
        summary: "Scarlett Johansson, (born November 22, 1984, New York City, New York, U.S.), American actress and singer whose acting\
         range earned her popular acclaim in a variety of genres, from period drama to thriller and action adventure.\
         Johansson, daughter of an architect and a producer, was raised in New York City. She and her twin brother, Hunter, were the youngest of four siblings.\
          She developed an interest in acting at a young age, auditioning for commercials by age seven. Soon after, she enrolled at the Lee Strasberg.",
        books: [
            {
                thumbnail: "https://books.google.com/books?id=iwiYGwAACAAJ&printsec=frontcover&img=1&zoom=5&sig=_L6ySKDAs-8gNK28c3NyFdO22ZM"
            },
            {
                thumbnail: "https://books.google.com/books?id=ezqe1hh91q4C&pg=PR3&img=1&zoom=5&sig=bBmzIAIiCtMcM7Ii7TUHycqqEWg"
            },
            {
                thumbnail: "http://books.google.com/books/content?id=nggnmAEACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api"
            },
            {
                thumbnail: "http://books.google.com/books/content?id=sJf1vQAACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api"
            },
            {
                thumbnail: "http://books.google.com/books/content?id=evuwdDLfAyYC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
            },
            {
                thumbnail: "http://books.google.com/books/content?id=74XNzF_al3MC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
            },
            {
                thumbnail: "http://books.google.com/books/content?id=jAUODAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
            },
            {
                thumbnail: "http://books.google.com/books/content?id=IOejDAAAQBAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api"
            },
            {
                thumbnail: "http://books.google.com/books/content?id=1wy49i-gQjIC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
            }
        ],
        videos: [
            {
                title: 'https://www.youtube.com/embed/GAxnqBFMYYU'
            },
            {
                title: 'https://www.youtube.com/embed/ZKSzrJkHtVg'
            },
            {
                title: 'https://www.youtube.com/embed/-NaxFsuEiwg'
            }
        ]
    },
    {
        firstName: "Angela",
        lastName: "Merkel",
        title: "Chancellor, Germany",
        shortSummary: "Angela Dorothea Merkel is a German politician who has been Chancellor of Germany.",
        interest: ['leadership', 'curiosity'],
        summary: "Angela Merkel, née Angela Dorothea Kasner, (born July 17, 1954, Hamburg, West Germany), German politician who in 2005 became\
         the first female chancellor of Germany.Merkel’s parents, Horst and Herlind Kasner, met in Hamburg, where her father was a theology student\
          and her mother was a teacher of Latin and English. After completing his education, her father accepted a pastorate in Quitzow, Brandenburg, and\
           the family relocated to East Germany (German Democratic Republic) just weeks after Merkel’s birth. In 1957 they moved again to Templin, where\
            Merkel finished high school in 1973.",
        books: [
            {
                thumbnail: "https://books.google.com/books?id=iwiYGwAACAAJ&printsec=frontcover&img=1&zoom=5&sig=_L6ySKDAs-8gNK28c3NyFdO22ZM"
            },
            {
                thumbnail: "https://books.google.com/books?id=ezqe1hh91q4C&pg=PR3&img=1&zoom=5&sig=bBmzIAIiCtMcM7Ii7TUHycqqEWg"
            },
            {
                thumbnail: "http://books.google.com/books/content?id=nggnmAEACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api"
            },
            {
                thumbnail: "http://books.google.com/books/content?id=sJf1vQAACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api"
            },
            {
                thumbnail: "http://books.google.com/books/content?id=evuwdDLfAyYC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
            },
            {
                thumbnail: "http://books.google.com/books/content?id=74XNzF_al3MC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
            },
            {
                thumbnail: "http://books.google.com/books/content?id=jAUODAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
            },
            {
                thumbnail: "http://books.google.com/books/content?id=IOejDAAAQBAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api"
            },
            {
                thumbnail: "http://books.google.com/books/content?id=1wy49i-gQjIC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
            }
        ],
        videos: [
            {
                title: 'https://www.youtube.com/embed/Y7Nbi9pN-tg'
            },
            {
                title: 'https://www.youtube.com/embed/q7Eb4KVw4nE'
            },
            {
                title: 'https://www.youtube.com/embed/9ofED6BInFs'
            }
        ]
    },
    {
        firstName: "Nancy",
        lastName: "Pelosi",
        title: "Speaker, United States",
        shortSummary: "Nancy Patricia Pelosi is a speaker of the United States House of Representatives.",
        interest: ['leadership', 'curiosity'],
        summary: "Nancy Pelosi, née Nancy Patricia D’Alesandro, (born March 26, 1940, Baltimore, Maryland, U.S.), American Democratic politician\
        who was a congresswoman from California in the U.S. House of Representatives (1987– ), where she served as the first female speaker (2007–11; 2019– ).\
         Her other notable posts included House minority leader (2003–07; 2011–19).Pelosi developed a reputation as a shrewd politician, and\
          she steadily rose within the party, becoming minority whip in 2002. Later that year she was elected minority leader, and, when she\
           took office in 2003, she became the first woman to lead a party in Congress. Using what she referred to as her “mother of five” voice, Pelosi\
            began pushing for unity among the diverse factions within her party by embracing conservatives and moderates. Still, Pelosi continued to vote\
             consistently in favour of such liberal causes as gun control and abortion rights, opposed welfare reform, and cast a vote against the Iraq War. ",
        books: [
            {
                thumbnail: "https://books.google.com/books?id=iwiYGwAACAAJ&printsec=frontcover&img=1&zoom=5&sig=_L6ySKDAs-8gNK28c3NyFdO22ZM"
            },
            {
                thumbnail: "https://books.google.com/books?id=ezqe1hh91q4C&pg=PR3&img=1&zoom=5&sig=bBmzIAIiCtMcM7Ii7TUHycqqEWg"
            },
            {
                thumbnail: "http://books.google.com/books/content?id=nggnmAEACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api"
            },
            {
                thumbnail: "http://books.google.com/books/content?id=sJf1vQAACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api"
            },
            {
                thumbnail: "http://books.google.com/books/content?id=evuwdDLfAyYC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
            },
            {
                thumbnail: "http://books.google.com/books/content?id=74XNzF_al3MC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
            },
            {
                thumbnail: "http://books.google.com/books/content?id=jAUODAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
            },
            {
                thumbnail: "http://books.google.com/books/content?id=IOejDAAAQBAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api"
            },
            {
                thumbnail: "http://books.google.com/books/content?id=1wy49i-gQjIC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
            }
        ],
        videos: [
            {
                title: 'https://www.youtube.com/embed/_3X5rugw-Lk'
            },
            {
                title: 'https://www.youtube.com/embed/vNDDOtAenEs'
            },
            {
                title: 'https://www.youtube.com/embed/I8-gs2fx92A'
            }
        ]
    },
    {
        firstName: "Ursula",
        lastName: "von der Leyen",
        title: "President, European Union",
        shortSummary: "Ursula Gertrud von der Leyen is a German politician, president of the European Commission.",
        interest: ['leadership', 'curiosity'],
        summary: "Ursula von der Leyen, née Ursula Albrecht, (born October 8, 1958, Brussels, Belgium), Belgian-born German politician who\
         was the first woman to serve as Germany’s minister of defense (2013–19). In July 2019 she became the first woman to be elected\
          president of the European Commission.Ursula was the daughter of German politician Ernst Albrecht, who had served as chief of cabinet\
           at the Commission of the European Economic Community. She studied economics (1977–80) at the Universities of Göttingen and Münster as\
            well as at the London School of Economics but never graduated. Instead, she went into medicine and graduated (1987) from Hanover (Germany)\
             Medical School (MHH). She worked as an assistant physician (1988–92) at the MHH’s gynecological clinic and in 1991 was awarded a doctorate\
              in medicine.",
        books: [
            {
                thumbnail: "https://books.google.com/books?id=iwiYGwAACAAJ&printsec=frontcover&img=1&zoom=5&sig=_L6ySKDAs-8gNK28c3NyFdO22ZM"
            },
            {
                thumbnail: "https://books.google.com/books?id=ezqe1hh91q4C&pg=PR3&img=1&zoom=5&sig=bBmzIAIiCtMcM7Ii7TUHycqqEWg"
            },
            {
                thumbnail: "http://books.google.com/books/content?id=nggnmAEACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api"
            },
            {
                thumbnail: "http://books.google.com/books/content?id=sJf1vQAACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api"
            },
            {
                thumbnail: "http://books.google.com/books/content?id=evuwdDLfAyYC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
            },
            {
                thumbnail: "http://books.google.com/books/content?id=74XNzF_al3MC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
            },
            {
                thumbnail: "http://books.google.com/books/content?id=jAUODAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
            },
            {
                thumbnail: "http://books.google.com/books/content?id=IOejDAAAQBAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api"
            },
            {
                thumbnail: "http://books.google.com/books/content?id=1wy49i-gQjIC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
            }
        ],
        videos: [
            {
                title: 'https://www.youtube.com/embed/5d6RlzSqrQk'
            },
            {
                title: 'https://www.youtube.com/embed/qQmjlDPyDfU'
            },
            {
                title: 'https://www.youtube.com/embed/G4_MkYzyz5U'
            }
        ]
    },
    {
        firstName: "Sushma",
        lastName: "Swaraj",
        title: "Minister of External Affairs of India",
        shortSummary: "Sushma Swaraj was Indian politician and a Supreme Court lawyer of India.",
        interest: ['leadership', 'curiosity'],
        summary: "Sushma Swaraj, née Sushma Sharma, (born February 14, 1952, Ambala, Haryana, India—died August 6, 2019, New Delhi), Indian\
         politician and government official who served in a variety of legislative and administrative posts at the state (Haryana) and national\
          (union) levels in India. She served as the leader of the Bharatiya Janata Party (BJP) in the Lok Sabha (lower chamber of the Indian parliament)\
           for five years (2009–14) and as minister of External Affairs (2014–19) in the BJP-led cabinet of Prime Minister Narendra Modi.",
        books: [
            {
                thumbnail: "https://books.google.com/books?id=iwiYGwAACAAJ&printsec=frontcover&img=1&zoom=5&sig=_L6ySKDAs-8gNK28c3NyFdO22ZM"
            },
            {
                thumbnail: "https://books.google.com/books?id=ezqe1hh91q4C&pg=PR3&img=1&zoom=5&sig=bBmzIAIiCtMcM7Ii7TUHycqqEWg"
            },
            {
                thumbnail: "http://books.google.com/books/content?id=nggnmAEACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api"
            },
            {
                thumbnail: "http://books.google.com/books/content?id=sJf1vQAACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api"
            },
            {
                thumbnail: "http://books.google.com/books/content?id=evuwdDLfAyYC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
            },
            {
                thumbnail: "http://books.google.com/books/content?id=74XNzF_al3MC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
            },
            {
                thumbnail: "http://books.google.com/books/content?id=jAUODAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
            },
            {
                thumbnail: "http://books.google.com/books/content?id=IOejDAAAQBAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api"
            },
            {
                thumbnail: "http://books.google.com/books/content?id=1wy49i-gQjIC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
            }
        ],
        videos: [
            {
                title: 'https://www.youtube.com/embed/MyfvNNNq4Sg'
            },
            {
                title: 'https://www.youtube.com/embed/Drz1f0vYe5k'
            },
            {
                title: 'https://www.youtube.com/embed/DtJmi3tZuGQ'
            }
        ]
    },
    {
        firstName: "Melinda",
        lastName: "Gates",
        title: "Co-Chair, Bill & Melinda Gates Foundation",
        shortSummary: "Melinda Ann Gates is an philanthropist and a former general manager at Microsoft",
        interest: ['leadership', 'curiosity'],
        summary: "Melinda Gates, née Melinda Ann French, (born August 15, 1964, Dallas, Texas, U.S.), American businesswoman and\
         philanthropist who—with her husband, Microsoft Corporation cofounder Bill Gates—cofounded the charitable Bill & Melinda Gates Foundation.\
         She first became interested in computers when a seventh-grade teacher placed her in an advanced math class. After graduating from the Ursuline\
          Academy (a Catholic girls’ high school), she studied computer science and economics at Duke University (B.S., 1986; M.B.A., 1987). She joined\
           Microsoft in product development in 1987 and rose to become general manager of information products. She married Bill Gates on January 1, 1994.",
        books: [
            {
                thumbnail: "https://books.google.com/books?id=iwiYGwAACAAJ&printsec=frontcover&img=1&zoom=5&sig=_L6ySKDAs-8gNK28c3NyFdO22ZM"
            },
            {
                thumbnail: "https://books.google.com/books?id=ezqe1hh91q4C&pg=PR3&img=1&zoom=5&sig=bBmzIAIiCtMcM7Ii7TUHycqqEWg"
            },
            {
                thumbnail: "http://books.google.com/books/content?id=nggnmAEACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api"
            },
            {
                thumbnail: "http://books.google.com/books/content?id=sJf1vQAACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api"
            },
            {
                thumbnail: "http://books.google.com/books/content?id=evuwdDLfAyYC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
            },
            {
                thumbnail: "http://books.google.com/books/content?id=74XNzF_al3MC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
            },
            {
                thumbnail: "http://books.google.com/books/content?id=jAUODAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
            },
            {
                thumbnail: "http://books.google.com/books/content?id=IOejDAAAQBAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api"
            },
            {
                thumbnail: "http://books.google.com/books/content?id=1wy49i-gQjIC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
            }
        ],
        videos: [
            {
                title: 'https://www.youtube.com/embed/DEDqsEjhQYk'
            },
            {
                title: 'https://www.youtube.com/embed/VqsFbzTcpdc'
            },
            {
                title: 'https://www.youtube.com/embed/2BOTS9GAjc4'
            }
        ]
    },
    {
        firstName: "Abigail",
        lastName: "Johnson",
        title: "CEO, Fidelity Investments",
        shortSummary: "Abigail Johnson is a president and chief executive officer of Fidelity Investments.",
        interest: ['leadership', 'curiosity'],
        summary: "Abigail Johnson has served as CEO of Fidelity Investments since 2014, when she took over for her father, and has been chairman since 2016.\
        Her grandfather, Edward Johnson II, founded the Boston-based mutual fund giant in 1946.\
        She owns an estimated 24.5% stake of the firm, which has nearly $2.9 trillion in managed assets.\
        Johnson has embraced cryptocurrencies and, in 2018, Fidelity launched a platform that allows institutional investors to trade bitcoin and ether.\
        She worked summers at Fidelity through college and joined full-time as an analyst in 1988 after receiving a Harvard M.B.A.",
        books: [
            {
                thumbnail: "https://books.google.com/books?id=iwiYGwAACAAJ&printsec=frontcover&img=1&zoom=5&sig=_L6ySKDAs-8gNK28c3NyFdO22ZM"
            },
            {
                thumbnail: "https://books.google.com/books?id=ezqe1hh91q4C&pg=PR3&img=1&zoom=5&sig=bBmzIAIiCtMcM7Ii7TUHycqqEWg"
            },
            {
                thumbnail: "http://books.google.com/books/content?id=nggnmAEACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api"
            },
            {
                thumbnail: "http://books.google.com/books/content?id=sJf1vQAACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api"
            },
            {
                thumbnail: "http://books.google.com/books/content?id=evuwdDLfAyYC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
            },
            {
                thumbnail: "http://books.google.com/books/content?id=74XNzF_al3MC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
            },
            {
                thumbnail: "http://books.google.com/books/content?id=jAUODAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
            },
            {
                thumbnail: "http://books.google.com/books/content?id=IOejDAAAQBAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api"
            },
            {
                thumbnail: "http://books.google.com/books/content?id=1wy49i-gQjIC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
            }
        ],
        videos: [
            {
                title: 'https://www.youtube.com/embed/i34HIOMV9kA'
            },
            {
                title: 'https://www.youtube.com/embed/PJd8i4ivLZk'
            },
            {
                title: 'https://www.youtube.com/embed/R9MRoINZjvM'
            }
        ]
    },
    {
        firstName: "Oprah",
        lastName: "Winfrey",
        title: "Entrepreneur, Personality, Philanthropist",
        shortSummary: "Oprah Gail Winfrey is atelevision producer, actress, author, and philanthropist.",
        interest: ['leadership', 'curiosity'],
        summary: "Oprah Winfrey has transitioned her hit talk show, which ran for 25 years, into a media and business empire.\
        The former news anchor built the reinvested profits from her talk show into $2 billion, according to Forbes estimates.\
        In 2011, Winfrey launched cable channel OWN. Her 25.5% of the network is worth more than $65 million.\
        The 'Oprah effect' has spread to Weight Watchers: she bought a 10% stake in 2015 (since lowered to 7%) and acts as a brand ambassador.\
        In March 2020, she returned to the small screen on Apple TV+ for an interview show about Covid-19 as part of her multiyear pact with the streamer.",
        books: [
            {
                thumbnail: "https://books.google.com/books?id=iwiYGwAACAAJ&printsec=frontcover&img=1&zoom=5&sig=_L6ySKDAs-8gNK28c3NyFdO22ZM"
            },
            {
                thumbnail: "https://books.google.com/books?id=ezqe1hh91q4C&pg=PR3&img=1&zoom=5&sig=bBmzIAIiCtMcM7Ii7TUHycqqEWg"
            },
            {
                thumbnail: "http://books.google.com/books/content?id=nggnmAEACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api"
            },
            {
                thumbnail: "http://books.google.com/books/content?id=sJf1vQAACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api"
            },
            {
                thumbnail: "http://books.google.com/books/content?id=evuwdDLfAyYC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
            },
            {
                thumbnail: "http://books.google.com/books/content?id=74XNzF_al3MC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
            },
            {
                thumbnail: "http://books.google.com/books/content?id=jAUODAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
            },
            {
                thumbnail: "http://books.google.com/books/content?id=IOejDAAAQBAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api"
            },
            {
                thumbnail: "http://books.google.com/books/content?id=1wy49i-gQjIC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
            }
        ],
        videos: [
            {
                title: 'https://www.youtube.com/embed/skj-ALA1HFE'
            },
            {
                title: 'https://www.youtube.com/embed/bAbQUO9x_8g'
            },
            {
                title: 'https://www.youtube.com/embed/bKzXoBfntDo'
            }
        ]
    },
    {
        firstName: "Robyn Rihanna",
        lastName: "Fenty",
        title: "Musician",
        shortSummary: "Robyn Rihanna Fenty is a singer, actress, businesswoman.",
        interest: ['leadership', 'curiosity', 'musician'],
        summary: "Rihanna, one of the most publicly charitable celebrities, has donated upwards of $8 million to coronavirus relief efforts.\
        She gave $1 million to New York's needy, $2.1 million to abuse victims in LA and $5 million to other charities through her Clara Lionel Foundation.\
        Despite her musical success, she's made the bulk of her fortune from Fenty Beauty, the makeup brand she co-owns with luxury goods group LVMH.\
        She also co-owns Savage X Fenty lingerie line with investors including online fashion firm TechStyle Fashion Group.\
        The Barbados native overcame hardships including an abusive addict father and a well-publicized assault by Chris Brown.",
        books: [
            {
                thumbnail: "https://books.google.com/books?id=iwiYGwAACAAJ&printsec=frontcover&img=1&zoom=5&sig=_L6ySKDAs-8gNK28c3NyFdO22ZM"
            },
            {
                thumbnail: "https://books.google.com/books?id=ezqe1hh91q4C&pg=PR3&img=1&zoom=5&sig=bBmzIAIiCtMcM7Ii7TUHycqqEWg"
            },
            {
                thumbnail: "http://books.google.com/books/content?id=nggnmAEACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api"
            },
            {
                thumbnail: "http://books.google.com/books/content?id=sJf1vQAACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api"
            },
            {
                thumbnail: "http://books.google.com/books/content?id=evuwdDLfAyYC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
            },
            {
                thumbnail: "http://books.google.com/books/content?id=74XNzF_al3MC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
            },
            {
                thumbnail: "http://books.google.com/books/content?id=jAUODAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
            },
            {
                thumbnail: "http://books.google.com/books/content?id=IOejDAAAQBAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api"
            },
            {
                thumbnail: "http://books.google.com/books/content?id=1wy49i-gQjIC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
            }
        ],
        videos: [
            {
                title: 'https://www.youtube.com/embed/X3n5Pk8fkLg'
            },
            {
                title: 'https://www.youtube.com/embed/rJvMV6aSso4'
            },
            {
                title: 'https://www.youtube.com/embed/kmZYrY9rL7I'
            }
        ]
    }
]

export { MESSAGES, USER }