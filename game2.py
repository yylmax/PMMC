import random

class Game2:
    def __init__(self):
        self.options = {}
        self.correct_answer = ''
        self.idx = 0
        
    def game2_backend(self):
        # data of animals
        animal_dict = {
            'Bottlenose Dolphin': ['static/asset/dolphin-noise-6968.mp3', 'https://encrypted-tbn1.gstatic.com/licensed-image?q=tbn:ANd9GcQRva8pjNAqCoaG7xIo6cSyTWqoLjnYIUVkzPqrmCY3xECGaiZn_r_Iw7kMCGR7R_snxxAxRjO7RhlDkR8'],
            'Killer Whale': ['static/asset/Whale.mp3', 'https://encrypted-tbn2.gstatic.com/licensed-image?q=tbn:ANd9GcR43BPry8TMW5Z0EQKmucruTKiq-NfJymzd7EhqrSQHaQlOw54TLrFv52pOoe8Mdlz35GGCZspM8vpiBoo'],
            'Gray Seal': ['static/asset/gray seal.mp3', 'https://encrypted-tbn1.gstatic.com/licensed-image?q=tbn:ANd9GcRLWGSg_S8CLGrx8BFiSitZE-LTwIpKBxbNzNoNRjRtvJKqmdZ-kcx51FsyIjyjg7Fb_uhRTd2mqg-TcME'],
            'Harp Seal': ['static/asset/harp seal1.mp3', 'https://encrypted-tbn1.gstatic.com/licensed-image?q=tbn:ANd9GcTEnmNWS-ojY71jVQ6XxQcvbXQ_mZoH1YoXUkQl6OLSANx_5yzYiadj40VZQsYMr3LNMr7OcJagTiO5sGs'],

            'Sea Otter': ['static/asset/sea otter1.mp3', 'https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcSovSIYbm3Hqlx1D04Im9ZBr9KJSANllRZFudLUAAnfH5hyOlMk7ocYGm6u0ZdbjZ7H5eqPkMZqgd_bg4c'],

            'Walrus': ['static/asset/Walrus1.mp3', 'https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcS6y7uqTnWN3onQnfNYDmBzD3rHymfbzgSIQKuBWDOsas2hogD1nzeS1NjLDe3eybpbC7zHFoxej-_3Oj8'],

            'Dugong': ['static/asset/Dugong1.mp3', 'https://encrypted-tbn3.gstatic.com/licensed-image?q=tbn:ANd9GcRX55I-DdIzA_cVHysJR8NXpKR-NNKQg9FOJpAGqtdOZpD7BsxLhFtLQP83alae5FbHGSsf2q314gvmRNA'],
            'Sea Lion': ['static/asset/Sea Lion bark.mp3', 'static/asset/adult male california sea lion.jpg'],
            'Elephant Seal': ['static/asset/Elephant Seal.mp3', 'static/asset/elephant seal.jpg']
        }

        animals = list(animal_dict.keys())
        #Selects 6 random animal names from the animals list using the random.sample() function.
        random_elements = random.sample(animals, 6)
        question_dict = {
            i[0]: i[1] for i in animal_dict.items() if i[0] in random_elements
        }
        #Converts the key-value pairs of question_dict into a list of tuples.
        items = list(question_dict.items())
        random.shuffle(items)
        self.options = dict(items)
        self.idx = random.randint(0, 5)
        self.correct_answer = list(self.options.keys())[self.idx]

        return self.options, self.correct_answer, self.idx
