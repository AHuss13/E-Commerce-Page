import Tag from "../models/Tag";

const tagData = [
  {
    tag_name: "rock music",
  },
  {
    tag_name: "pop music",
  },
  {
    tag_name: "blue",
  },
  {
    tag_name: "red",
  },
  {
    tag_name: "green",
  },
  {
    tag_name: "white",
  },
  {
    tag_name: "gold",
  },
  {
    tag_name: "pop culture",
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
