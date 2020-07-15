import {Injectable} from '@angular/core';
import {Post} from "./post.model";

@Injectable({
  providedIn: 'root'
})

export class PostsService {

  sources = [
    "All sources",
    "Newspaper",
    "Magazine",
    "TvShow"
  ];


  posts: Post[] = [
    {
      id: 1,
      source: "Newspaper",
      img: 'https://assets.vogue.com/photos/5f086247c8dcccfb9ab6b312/master/w_1600%2Cc_limit/S2020%25252011.jpg',
      author: "Alex Some",
      title: "Valentina Sampaio Makes History as Sports Illustrated’s First Trans Model",
      text: "Sports Illustrated’s swimsuit issue is a modeling institution. In the 56 years since its inception, the special edition has elevated stars like Heidi Klum, Tyra Banks, and Ashley Graham to household-name status, and each year it ushers in a new set of rookies from around the globe. The parameters for success have historically been narrow, but the concept has evolved to reflect the times. The year 2020 brings the first trans woman to grace SI’s pages, the Brazilian-born model Valentina Sampaio. She’s used to breaking boundaries—Sampaio was already the first trans model to make the cover of a Vogue edition—but discovering she had made the cut was special. “The team at SI has created yet another groundbreaking issue by bringing together a diverse set of multitalented, beautiful women in a creative and dignified way,” she shared with Vogue. “I am excited and honored to be part [of this].”",
      date: new Date('July 10, 2020')
    },
    {
      id: 2,
      source: "Magazine",
      img: 'https://assets.vogue.com/photos/5f060d7d6e508db81e67f43d/master/w_2560%2Cc_limit/00-masks-skin.jpg',
      author: "Talia Abbas",
      title: "The Pro’s Guide to Skin Care and Makeup When You’re Wearing a Mask",
      text: "When the CDC first recommended that we start wearing face coverings to help slow the spread of COVID-19, few people realized what an essential part of our getup they would soon become. And while many of us have met the moment with a resilient optimism and invested in a mask that marries form and function—be it Susan Alexandra’s beaded take or Batsheva’s upcycled floral cottons—even the chicest offerings can’t combat maskne, or return to us the joy of a swipe of lipstick, which is why our skin-care and makeup routines now require some recalibrating. With this in mind, Vogue has turned to the pros to sound off on the changes that we should all be implementing above the neck, from swapping out thick creams with a serum-based moisturizer to embracing a newfound need for creative expression at eye level. Below, their top tips.",
      date: new Date('July 11, 2020')
    },
    {
      id: 3,
      source: "TvShow",
      img: 'https://assets.vogue.com/photos/5f08bb45b290b6b3686a6ec0/master/w_1600%2Cc_limit/slide_15.jpg',
      author: "Alex Some",
      title: "Cloth Masks to Shop Now",
      text: "It looks like we’re going to be wearing cloth face masks for a while, which is all the more reason to find one that you like. The CDC has been recommending that people wear masks when going out in public for weeks. And yesterday Governor Andrew Cuomo issued an order that New Yorkers must wear masks in public places where social distancing six feet is not possible. (Cuomo specified that people would not be jailed for not wearing a mask, but fines could be issued.) Similar orders have been issued in New Jersey and Puerto Rico, but wearing a fabric mask as a civilian is now common sense, provided you can afford and access one. So for the foreseeable future, we’ll be wearing masks to the grocery store, on walks and runs, and maybe even after the crisis abates. Given the prevalence of mask selfies, it’s likely that masks will start to become fashion items, rather than merely functional.",
      date: new Date('July 08, 2020')
    },
    {
      id: 4,
      source: "Magazine",
      img: 'https://media.glamour.com/photos/5f089d07f3ca290c16467d6e/16:9/w_768%2Cc_limit/river2%252520(1).jpg',
      author: "Talia Abbas",
      title: "The Net-a-Porter Sale Is the Summer Blowout Your Closet Needs",
      text: 'This summer has seen so many great fashion deals, and the Net-a-Porter sale is keeping things going with thousands of items on sale right now. This month the online retailer—which carries luxury labels and emerging designers like Loewe, Khaite, and Cult Gaia—is having its big summer sale, with markdowns on everything from cover-ups and sandals to sustainable swimwear and bike shorts at 70% off.   Net-a-Porter sales happen only twice a year, and shoppers from around the world hone their wish lists months in advance to score one of those seen-on-Instagram pieces at a seriously good discount. Retro-inspired bikinis, quality athleisure, and floral numbers are all ripe for the carting, and if you’re at a loss for summer outfit inspiration, now’s your chance to snag a designer piece you’ll enjoy for years to come.',
      date: new Date('July 03, 2020')
    },
    {
      id: 5,
      source: 'Newspaper',
      img: 'https://media.glamour.com/photos/5e837bae7961bc0008e14183/1:1/w_1600%2Cc_limit/rihanna.jpg',
      author: 'Christopher Rosa',
      title: 'Rihanna’s Fenty Skin-Care Line Officially Has a Launch Date',
      text: 'Things have undoubtedly been bleak this summer, but Rihanna is giving us all something to look forward to now. Fenty Skin officially has a launch date, and it is soon. The singer and beauty mogul announced the news on a newly created Instagram page for the brand, writing: “Fenty Skin is launching July 31st exclusively at fentyskin.com!!” The caption didn\'t give any hint as to what the line might consist of (dark spot treatments? Moisturizers made for women of color? Your guess is as good as ours), but it did allude to the fact that we should know more in the coming weeks.',
      date: new Date('July 02, 2020')
    },
    {
      id: 6,
      source: 'Newspaper',
      img: 'https://media.glamour.com/photos/5f0e09fa332ce436caa705f1/1:1/w_1600%2Cc_limit/meghan-markle.jpg',
      author: 'Christopher Rosa',
      title: 'Meghan Markle Has Super-Long Hair Now—And the Internet Is Buzzing',
      text: 'Meghan Markle was the keynote speaker at this year’s virtual Girl Up Leadership Summit, and along with delivering a powerful speech, she also debuted a new super-long, super-sleek hairstyle. While most of the focus of Markle’s appearance was centered on her speech—in which she urged the young women watching to “chase convictions with action”—the internet couldn’t help but also notice her pin-straight hair, which went, essentially, to the middle of her torso. It’s not clear if this was a deliberate choice or the product of Markle’s having, like the rest of us, not seen a hairstylist in a few months (salons in L.A. just recently reopened only to close right back up again due to climbing cases of COVID-19), but either way it looks incredible. It’s a switch-up from the three signature looks Markle has become well-known for—beachy waves, a messy bun, and a slick ponytail—but it’s also effortless and laid-back, right in line with her style. ',
      date: new Date('July 01, 2020')
    }
  ];

  localPosts = this.posts;

  getById(id: number) {
    return this.localPosts.find(p => p.id === id);
  }

  addNewPost(newPost) {
    this.posts = [...this.posts, newPost];
  };

  filter(inputValue, filterCheck) {
    this.localPosts = filterCheck ? this.posts : this.posts.filter((post) => post.title.toUpperCase().includes(inputValue.toUpperCase()));
  }

  sourcesFilter(selectedSource) {
    this.localPosts = selectedSource === "All sources" ? this.posts : this.posts.filter((post) => post.source === selectedSource);
  }

}
