const categories = {
    "Programming": [
        "react", "native", "javascript", "typescript", "python", "java", "kotlin", "swift"
    ],
    "Fruits": [
        "apple", "banana", "cherry", "date", "elderberry", "fig", "grape", "honeydew", "kiwi", "lemon", "lime", "mango", "nectarine", "orange", "papaya", "quince", "raspberry", "strawberry", "tangerine", "watermelon", "xigua", "yuzu", "zucchini", "plum", "peach", "pear", "apricot", "blackberry", "blueberry", "cranberry", "dragonfruit", "gooseberry", "grapefruit", "guava", "jackfruit", "lychee", "mandarin", "mulberry", "olive", "passionfruit", "persimmon", "pineapple", "pomegranate", "starfruit", "tamarind", "tomato", "cloudberry", "camu camu", "cantaloupe"
    ],
    "Animals": [
        "cat", "dog", "elephant", "giraffe", "hippopotamus", "iguana", "jaguar", "kangaroo", "lemur", "mongoose", "antelope", "bear", "cheetah", "dolphin", "eagle", "fox", "goat", "hedgehog", "impala", "jellyfish", "koala", "lion", "monkey", "narwhal", "octopus", "penguin", "quokka", "rhinoceros", "shark", "tiger", "urial", "vulture", "wolf", "xenopus", "yak", "zebra", "alligator", "bat", "camel", "duck", "falcon", "gorilla", "hawk", "ibex", "jackal", "kiwi", "lemur", "manatee", "newt", "orca", "panda", "quail", "reindeer", "seal", "tapir", "urchin", "vole", "wombat", "xerus", "yak", "zebu", "aardvark", "badger", "capybara", "deer", "emu", "ferret", "gecko", "heron", "ibis", "jaguarundi", "kudu", "lemur", "moose", "nighthawk", "ostrich", "platypus", "quetzal", "skunk", "tamarin", "uakari", "vicuna", "walrus", "xoloitzcuintli", "yak", "zorilla", "anaconda", "bison", "chinchilla", "dugong"
    ],
    "Countries": ["argentina", "brazil", "canada", "denmark", "egypt", "finland", "germany", "hungary", "india", "japan", "australia", "belgium", "china", "ecuador", "france", "greece", "iceland", "italy", "jamaica", "kenya", "luxembourg", "malaysia", "netherlands", "oman", "portugal", "qatar", "russia", "spain", "thailand", "ukraine", "vietnam", "wales", "zimbabwe", "andorra", "bhutan", "chile", "dominica", "estonia", "fiji", "georgia", "haiti", "indonesia", "jordan", "kazakhstan", "latvia", "malta", "nepal", "norway", "poland", "romania", "slovakia", "tonga", "uruguay", "venezuela", "yemen", "albania", "botswana", "cyprus", "djibouti", "ethiopia", "finland", "ghana", "honduras", "ireland", "kiribati", "liberia", "moldova", "nigeria", "panama", "rwanda", "slovenia", "tunisia", "uganda", "vanuatu", "yugoslavia", "afghanistan", "burundi", "comoros", "drcongo", "eritrea", "gabon", "guatemala", "iran", "kuwait", "laos", "lesotho", "madagascar", "nicaragua", "pakistan", "somalia"
    ],
    "Movies": [
        "inception", "avatar", "gladiator", "titanic", "braveheart", "jaws", "rocky", "matrix", "fargo", "goodfellas",
        "aliens", "amadeus", "brave", "casablanca", "deadpool", "django", "eternals", "fury", "godfather", "halloween",
        "interstellar", "joker", "killbill", "la la land", "mad max", "no country for old men", "oceans 11", "predator", "quarantine", "requiem for a dream",
        "schindler's list", "taxi driver", "unforgiven", "v for vendetta", "whiplash", "x-men", "yesterday", "zodiac", "apollo 13", "batman",
        "creed", "dunkirk", "evangelion", "fight club", "gravity", "her", "incredibles", "jackie", "kingsman", "logan",
        "memento", "notting hill", "oblivion", "patriot", "queen", "raiders of the lost ark", "saving private ryan", "thor", "us", "venom",
        "warrior", "xanadu", "year one", "zoolander", "avatar 2", "black panther", "coco", "dark knight", "et", "finding nemo",
        "gattaca", "hotel rwanda", "in bruges", "john wick", "kung fu panda", "life of pi", "moonlight", "nightcrawler", "oldboy", "parasite"
    ],
    "Sports": [
        "soccer", "basketball", "baseball", "tennis", "cricket", "golf", "rugby", "hockey", "swimming", "cycling",
        "badminton", "boxing", "curling", "diving", "equestrian", "fencing", "gymnastics", "handball", "ice skating", "judo",
        "karate", "lacrosse", "martial arts", "netball", "orienteering", "polo", "quidditch", "rowing", "skiing", "table tennis",
        "ultimate frisbee", "volleyball", "weightlifting", "x games", "yachting", "zumba", "archery", "billiards", "canoeing", "darts",
        "esports", "freerunning", "gaelic football", "hang gliding", "ice hockey", "jai alai", "kayaking", "luge", "motorsport", "nordic walking",
        "parkour", "quad biking", "roller derby", "snowboarding", "taekwondo", "underwater hockey", "vaulting", "water polo", "xtreme sports", "yoga",
        "zorb football", "aikido", "base jumping", "cheerleading", "discus throw", "endurance racing", "futsal", "greyhound racing", "hurling", "indoor soccer",
        "jujitsu", "kickboxing", "land sailing", "muay thai", "open water swimming", "paintball", "quidditch", "road racing", "softball", "trampolining"
    ],
    "Colors": [
        "red", "blue", "green", "yellow", "purple", "orange", "pink", "brown", "black", "white",
        "amber", "aquamarine", "azure", "beige", "cerulean", "charcoal", "coral", "crimson", "cyan", "fuchsia",
        "gold", "indigo", "ivory", "jade", "lavender", "lime", "magenta", "maroon", "mint", "navy",
        "olive", "peach", "periwinkle", "plum", "rose", "ruby", "salmon", "sapphire", "scarlet", "silver",
        "teal", "turquoise", "violet", "wine", "alabaster", "blush", "bronze", "chartreuse", "emerald", "graphite",
        "lemon chiffon", "mustard", "peacock", "sepia", "taupe", "umber", "vermillion", "wisteria", "zinnwaldite", "ash",
        "bittersweet", "bistre", "carmine", "ecru", "eggplant", "flame", "folly", "gainsboro", "heliotrope", "khaki",
        "lilac", "mauve", "orchid", "pear", "quartz", "rainbow", "ruby", "smoky black", "tan", "verdigris",
        "xanthic", "zaffre", "zomp", "alizarin", "amaranth", "antique brass", "barn red", "cadet blue", "davys grey", "egyptian blue"
    ],
    "Vegetables": [
        "carrot", "broccoli", "cauliflower", "spinach", "kale", "cabbage", "lettuce", "peas", "beetroot", "potato",
        "artichoke", "asparagus", "beans", "bell pepper", "brussels sprouts", "butternut squash", "chard", "collard greens", "corn", "cucumber",
        "eggplant", "fennel", "garlic", "ginger", "horseradish", "jicama", "kohlrabi", "leek", "mushroom", "okra",
        "onion", "parsnip", "pumpkin", "radish", "rutabaga", "shallot", "snow pea", "sweet potato", "tomato", "turnip",
        "watercress", "yam", "zucchini", "bamboo shoots", "bitter melon", "bok choy", "celery", "chayote", "cilantro", "dandelion greens",
        "edamame", "endive", "escarole", "frisee", "jerusalem artichoke", "lemongrass", "lotus root", "mung bean", "mustard greens", "nopales",
        "radicchio", "romaine", "scallion", "seaweed", "sprouts", "squash", "sunchoke", "taro", "water chestnut", "winter squash",
        "broad beans", "chicory", "daikon", "fiddlehead", "florence fennel", "garden cress", "gobo", "hyacinth bean", "mizuna", "purslane",
        "samphire", "seakale", "sorrel", "tatsoi", "tindora", "tok choy", "tuscan kale", "welsh onion", "yardlong bean", "yuca"
    ],
    "Cities": [
        "paris", "london", "newyork", "tokyo", "sydney", "moscow", "dubai", "rome", "berlin", "amsterdam",
        "bangkok", "barcelona", "beijing", "buenosaires", "cape town", "chicago", "delhi", "hong kong", "istanbul", "jakarta",
        "kuala lumpur", "lisbon", "los angeles", "madrid", "mexico city", "milan", "miami", "montreal", "mumbai", "munich",
        "nairobi", "osaka", "philadelphia", "prague", "rio de janeiro", "san francisco", "santiago", "seoul", "shanghai", "singapore",
        "stockholm", "toronto", "vienna", "warsaw", "zurich", "abu dhabi", "athens", "auckland", "baghdad", "belgrade",
        "brussels", "cairo", "colombo", "copenhagen", "dublin", "edmonton", "gothenburg", "hanoi", "helsinki", "ho chi minh city",
        "kiev", "kingston", "lausanne", "luxembourg", "manila", "naples", "oslo", "porto", "quito", "reykjavik",
        "riyadh", "rotterdam", "sofia", "st. petersburg", "tallinn", "tel aviv", "thessaloniki", "vancouver", "venice", "wellington",
        "amritsar", "antwerp", "baku", "brasilia", "brisbane", "bucharest", "casablanca", "charlotte", "dakar", "dhaka"
    ],
    "Brands": [
        "nike", "adidas", "apple", "samsung", "sony", "tesla", "microsoft", "google", "amazon", "facebook",
        "bmw", "coca cola", "disney", "ford", "general electric", "honda", "ibm", "intel", "johnson & johnson", "kfc",
        "lg", "louis vuitton", "mastercard", "mcdonald's", "mercedes-benz", "nestle", "nissan", "pepsi", "philips", "porsche",
        "procter & gamble", "red bull", "santander", "shell", "starbucks", "toyota", "visa", "volkswagen", "walmart", "whirlpool",
        "xbox", "yahoo", "zara", "acer", "airbnb", "audi", "avon", "baidu", "boeing", "burberry",
        "cadillac", "canon", "chanel", "chevrolet", "dell", "dior", "domino's", "durex", "ebay", "exxon",
        "fedex", "ferrari", "fujitsu", "gopro", "gucci", "harley-davidson", "heineken", "hermes", "hp", "hyundai",
        "ikea", "jaguar", "jbl", "john deere", "kellogg's", "kodak", "lego", "levi's", "lexus", "lucasfilm",
        "marlboro", "michelin", "moet", "nivea", "oracle", "pampers", "paypal", "prada", "reebok", "rolex"
    ]
};
  
export const getRandomCategory = () => {
    const categoryKeys = Object.keys(categories);
    const randomCategory = categoryKeys[Math.floor(Math.random() * categoryKeys.length)];
    return randomCategory;
};
  
export const getRandomWordFromCategory = (category) => {
    const words = categories[category];
    return words[Math.floor(Math.random() * words.length)];
};
  