import Tag from "../models/Tag";

const tagData = [
  {
    tag_name: "Rock Music",
  },
  {
    tag_name: "Pop Music",
  },
  {
    tag_name: "Blue",
  },
  {
    tag_name: "Red",
  },
  {
    tag_name: "Green",
  },
  {
    tag_name: "White",
  },
  {
    tag_name: "Gold",
  },
  {
    tag_name: "Pop Culture",
  },
  {
    tag_name: "New Arrival",
  },
  {
    tag_name: "Best Seller",
  },
  {
    tag_name: "Sale",
  },
  {
    tag_name: "Premium",
  },
  {
    tag_name: "Limited Edition",
  },
  {
    tag_name: "Trending Now",
  },
  {
    tag_name: "Gift Idea",
  },
  {
    tag_name: "Family Friendly",
  },
  {
    tag_name: "Seasonal",
  },
  {
    tag_name: "Clearance",
  },
];

const seedTags = () => Tag.bulkCreate(tagData);

export default seedTags;
