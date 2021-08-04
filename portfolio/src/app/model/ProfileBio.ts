export class ProfileBio {
  name: String;
  image: String;
  secondaryImage: String;
  age: Number;
  bio: String;
  instagramLink: String;
  linkedInLink: String;
  twitterLink: String;

  constructor(
    name: String,
    image: String,
    secondaryImage: String,
    age: Number,
    bio: String,
    instagramLink: String,
    linkedInLink: String,
    twitterLink: String
  ) {
    this.name = name;
    this.image = image;
    this.secondaryImage = secondaryImage;
    this.age = age;
    this.bio = bio;
    this.instagramLink = instagramLink;
    this.linkedInLink = linkedInLink;
    this.twitterLink = twitterLink;
  }
}
