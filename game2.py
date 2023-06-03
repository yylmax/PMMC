import random

class Game2:
    def __init__(self):
        self.options = {}
        self.correct_answer = ''
        self.idx = 0
        
    def game2_backend(self):
        animal_dict = {
            'Bottlenose Dolphin': {
                'sound': 'dolphin-noise-6968.mp3',
                'image': 'https://encrypted-tbn1.gstatic.com/licensed-image?q=tbn:ANd9GcQRva8pjNAqCoaG7xIo6cSyTWqoLjnYIUVkzPqrmCY3xECGaiZn_r_Iw7kMCGR7R_snxxAxRjO7RhlDkR8'
            },
            'Killer Whale': {
                'sound': 'Whale.mp3',
                'image': 'https://encrypted-tbn2.gstatic.com/licensed-image?q=tbn:ANd9GcR43BPry8TMW5Z0EQKmucruTKiq-NfJymzd7EhqrSQHaQlOw54TLrFv52pOoe8Mdlz35GGCZspM8vpiBoo'
            },
            'Gray Seal': {
                'sound': 'gray seal.mp3',
                'image': 'https://encrypted-tbn1.gstatic.com/licensed-image?q=tbn:ANd9GcRLWGSg_S8CLGrx8BFiSitZE-LTwIpKBxbNzNoNRjRtvJKqmdZ-kcx51FsyIjyjg7Fb_uhRTd2mqg-TcME'
            },
            'Harp Seal': {
                'sound': 'https://www.google.com/search?q=Harp+Seal%27+sound&ei=q5V7ZP-QJrzOkPIPsZib4A8&ved=0ahUKEwi_kqiE7Kf_AhU8J0QIHTHMBvwQ4dUDCBA&uact=5&oq=Harp+Seal%27+sound&gs_lcp=Cgxnd3Mtd2l6LXNlcnAQAzIGCAAQFhAeMgYIABAWEB4yBggAEBYQHjIICAAQigUQhgMyCAgAEIoFEIYDMggIABCKBRCGAzoKCAAQRxDWBBCwAzoICAAQFhAeEA9KBAhBGABQvBNY8xxgjB5oAXABeAGAAewCiAGfCJIBBzIuMi4wLjKYAQCgAQHAAQHIAQg&sclient=gws-wiz-serp&bshm=nce/1#fpstate=ive&vld=cid:96cd6aaf,vid:ZCJzg-gSNkQ',
                'image': 'https://encrypted-tbn1.gstatic.com/licensed-image?q=tbn:ANd9GcTEnmNWS-ojY71jVQ6XxQcvbXQ_mZoH1YoXUkQl6OLSANx_5yzYiadj40VZQsYMr3LNMr7OcJagTiO5sGs'
            },
            'Sea Otter': {
                'sound': 'https://www.google.com/search?q=Sea+Otter+sounds&sxsrf=APwXEddw8BZptJJqNPj64v8lQ_mxJACC4Q%3A1685820773134&ei=ZZV7ZIjmB5bhkPIPmZC1kA4&ved=0ahUKEwjIrNni66f_AhWWMEQIHRlIDeIQ4dUDCBA&uact=5&oq=Sea+Otter+sounds&gs_lcp=Cgxnd3Mtd2l6LXNlcnAQAzIFCAAQgAQyBggAEAUQHjIICAAQBRAHEB4yCAgAEIoFEIYDMggIABCKBRCGAzIICAAQigUQhgMyCAgAEIoFEIYDMggIABCKBRCGAzoKCAAQRxDWBBCwA0oECEEYAFCFA1iFA2CiBWgCcAF4AIABcogBcpIBAzAuMZgBAKABAqABAcABAcgBBA&sclient=gws-wiz-serp#fpstate=ive&vld=cid:83c848f8,vid:1LfqixX8M4k',
                'image': 'https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcSovSIYbm3Hqlx1D04Im9ZBr9KJSANllRZFudLUAAnfH5hyOlMk7ocYGm6u0ZdbjZ7H5eqPkMZqgd_bg4c'
            },
            'Walrus': {
                'sound': 'https://www.google.com/search?q=walrus+sounds&oq=Walrus+&aqs=chrome.2.69i57j69i59j0i67i433i650j0i67i650j0i67i433i650j0i131i433i512j0i67i650j69i61.1928j1j7&sourceid=chrome&ie=UTF-8#fpstate=ive&vld=cid:b109a03a,vid:0ozi-l5tkoY',
                'image': 'https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcS6y7uqTnWN3onQnfNYDmBzD3rHymfbzgSIQKuBWDOsas2hogD1nzeS1NjLDe3eybpbC7zHFoxej-_3Oj8'
            },
            'Dugong': {
                'sound': 'https://www.facebook.com/Save-the-Dugong-284948411674557/videos/sound-on-an-endangered-dugong-vocalizing-one-of-the-rarest-sounds-in-the-ocean-d/2357532397643813/',
                'image': 'https://encrypted-tbn3.gstatic.com/licensed-image?q=tbn:ANd9GcRX55I-DdIzA_cVHysJR8NXpKR-NNKQg9FOJpAGqtdOZpD7BsxLhFtLQP83alae5FbHGSsf2q314gvmRNA'
            },
            'Sea Lion': {
                'sound': 'Sea Lion bark.mp3',
                'image': 'adult male california sea lion.jpg'
            },
            'Elephant Seal': {
                'sound': 'Elephant Seal.mp3',
                'image': 'elephant seal.jpg'
            }, 
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
