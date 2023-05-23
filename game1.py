import random
import math

class Game1:
    def __init__(self):
        self.options = {}
        self.correct_answer = ''
        self.idx = 0
        
        
    def game1_backend(self):
        animal_dict = {
            'Bottlenose Dolphin': 'https://encrypted-tbn1.gstatic.com/licensed-image?q=tbn:ANd9GcQRva8pjNAqCoaG7xIo6cSyTWqoLjnYIUVkzPqrmCY3xECGaiZn_r_Iw7kMCGR7R_snxxAxRjO7RhlDkR8',
            'Killer Whale': 'https://encrypted-tbn2.gstatic.com/licensed-image?q=tbn:ANd9GcR43BPry8TMW5Z0EQKmucruTKiq-NfJymzd7EhqrSQHaQlOw54TLrFv52pOoe8Mdlz35GGCZspM8vpiBoo',
            'Humpback Whale': 'https://encrypted-tbn3.gstatic.com/licensed-image?q=tbn:ANd9GcRS_z5renKJCOCd5LSIxZa7RlCAU2a973nuwGwhaBjld-qUDdd0TD6U3eVJ6bOeY90fv4JAhcUoP7_akRg',
            'Beluga Whale': 'https://encrypted-tbn2.gstatic.com/licensed-image?q=tbn:ANd9GcT5VrPbocdsOlioafkayOxOX75eKkfbBG5x_2sD_bqR36DRaq-CFcaMnAK06Nx_6NOYJ34Y2SrOfXFLpEQ',
            'Sperm Whale': 'https://encrypted-tbn1.gstatic.com/licensed-image?q=tbn:ANd9GcTgUYf39ReJWCcuy4bx7o_ldfXWib57aWlv20xODNrPcQbMcSizf5-Zd_lNTLxjLGcPmJMU_b2dw3JtzkU',
            'Gray Seal': 'https://encrypted-tbn1.gstatic.com/licensed-image?q=tbn:ANd9GcRLWGSg_S8CLGrx8BFiSitZE-LTwIpKBxbNzNoNRjRtvJKqmdZ-kcx51FsyIjyjg7Fb_uhRTd2mqg-TcME',
            'Harp Seal': 'https://encrypted-tbn1.gstatic.com/licensed-image?q=tbn:ANd9GcTEnmNWS-ojY71jVQ6XxQcvbXQ_mZoH1YoXUkQl6OLSANx_5yzYiadj40VZQsYMr3LNMr7OcJagTiO5sGs',
            'Sea Otter': 'https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcSovSIYbm3Hqlx1D04Im9ZBr9KJSANllRZFudLUAAnfH5hyOlMk7ocYGm6u0ZdbjZ7H5eqPkMZqgd_bg4c',
            'Walrus': 'https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcS6y7uqTnWN3onQnfNYDmBzD3rHymfbzgSIQKuBWDOsas2hogD1nzeS1NjLDe3eybpbC7zHFoxej-_3Oj8',
            'Dugong': 'https://encrypted-tbn3.gstatic.com/licensed-image?q=tbn:ANd9GcRX55I-DdIzA_cVHysJR8NXpKR-NNKQg9FOJpAGqtdOZpD7BsxLhFtLQP83alae5FbHGSsf2q314gvmRNA'}
        animals = list(animal_dict.keys())
        random_elements = random.sample(animals, 4)
        question_dict = {
            i[0]: i[1] for i in animal_dict.items() if i[0] in random_elements
        }
        items = list(question_dict.items())
        random.shuffle(items)
        self.shuffle_question = dict(items)
        self.idx = random.randint(0, 3)
        self.correct_answer = list(self.shuffle_question.keys())[self.idx]

        return self.shuffle_question, self.correct_answer, self.idx