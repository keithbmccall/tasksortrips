import LA from "../assets/data/city-preview-images/la.jpg";
import NY from "../assets/data/city-preview-images/nyc.jpg";
import PARIS from "../assets/data/city-preview-images/paris.jpg";
import RIO from "../assets/data/city-preview-images/rio.jpg";
import TO from "../assets/data/city-preview-images/to.jpg";
//
import HIKING from "../assets/data/event-preview-images/hiking.jpg";
import SKIING from "../assets/data/event-preview-images/skiing.jpeg";
import PARASAILING from "../assets/data/event-preview-images/parasailing.jpg";
import MYSTERY from "../assets/data/event-preview-images/mystery.jpg";
//
const cityData = [
  {
    city: "New York",
    state: "New York",
    stateAbrev: "NY",
    country: "US",
    tagline: "the city that never sleeps",
    pic: NY
  },
  {
    city: "Los Angeles",
    state: "California",
    stateAbrev: "CA",
    country: "US",
    tagline: "the city of Angels",
    pic: LA
  },
  {
    city: "Toronto",
    state: "Ontario",
    stateAbrev: "ON",
    country: "CA",
    tagline: "fall in XO with TO",
    pic: TO
  },
  {
    city: "Paris",
    state: null,
    stateAbrev: null,
    country: "FR",
    tagline: "the city of lights",
    pic: PARIS
  },
  {
    city: "Rio de Janeiro",
    state: null,
    stateAbrev: null,
    country: "BR",
    tagline: "the city of god",
    pic: RIO
  }
];
const eventData = [
  {
    name: "hiking",
    description: "the best views",
    pic: HIKING
  },
  {
    name: "mystery",
    description: "get on your sherlock holmes",
    pic: MYSTERY
  },
  {
    name: "parasailing",
    description: "open the wings of freedom",
    pic: PARASAILING
  },
  {
    name: "skiing",
    description: "escape the heat",
    pic: SKIING
  }
];

export const CityData = cityData;
export const EventData = eventData;
