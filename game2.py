import random

class Game2:
    def __init__(self):
        self.options = {}
        self.correct_answer = ''
        self.idx = 0
        
    def game2_backend(self):
        animal_dict = {
            'Bottlenose Dolphin': {
                'sound': 'dolphin_sound.mp3',
                'image': 'dolphin.gif'
            },
            'Killer Whale': {
                'sound': 'killer_whale_sound.mp3',
                'image': 'killer_whale.gif'
            },
            'Humpback Whale': {
                'sound': 'humpback_whale_sound.mp3',
                'image': 'humpback_whale.gif'
            },
            'Beluga Whale': {
                'sound': 'beluga_whale_sound.mp3',
                'image': 'beluga_whale.gif'
            },
            'Sperm Whale': {
                'sound': 'sperm_whale_sound.mp3',
                'image': 'sperm_whale.gif'
            },
            'Gray Seal': {
                'sound': 'gray_seal_sound.mp3',
                'image': 'gray_seal.gif'
            },
            'Harp Seal': {
                'sound': 'harp_seal_sound.mp3',
                'image': 'harp_seal.gif'
            },
            'Sea Otter': {
                'sound': 'sea_otter_sound.mp3',
                'image': 'sea_otter.gif'
            },
            'Walrus': {
                'sound': 'walrus_sound.mp3',
                'image': 'walrus.gif'
            },
            'Dugong': {
                'sound': 'dugong_sound.mp3',
                'image': 'dugong.gif'
            }
        }

        animals = list(animal_dict.keys())
        random_elements = random.sample(animals, 4)
        question_dict = {
            animal: {
                'sound': animal_dict[animal]['sound'],
                'image': animal_dict[animal]['image']
            } for animal in random_elements
        }
        items = list(question_dict.items())
        random.shuffle(items)
        self.options = dict(items)
        self.idx = random.randint(0, 3)
        self.correct_answer = list(self.options.keys())[self.idx]

        return self.options, self.correct_answer, self.idx
