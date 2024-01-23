const mongoose = require("mongoose");
const Product = require("../model/product"); // Assuming the schema is in a separate file
require("dotenv").config();
const mongoDB = process.env.MONGODB_URI;

async function main() {
  console.log("Attempting to connect to MongoDB...");
  await mongoose.connect(mongoDB);
  console.log("Connection Successful!");
}

async function start() {
  try {
    main();
  } catch (err) {
    console.error(err);
  }
}

start();

const biampcategories = ["Servers", "Forte AI", "Forte CI", "Forte VT"];

// Sample Biamp products
const biampProducts = [
  {
    name: "Tesira SERVER",
    model: "DSP-S100",
    description:
      "The Tesira SERVER is a digital network server. It is factory configured with one DSP-2 card and can accept up to a total of eight DSP-2 cards. The SERVER is also factory configured with one AVB-1 card and has a second slot that can be outfitted with an additional AVB-1 card, a 32 x 32 channel SCM-1 CobraNet card, a 64 x 64 channel DAN-1 Dante™ card, or a standard I/O card for four channels of local I/O. The SERVER is the core of a Tesira digital audio system and can be used with Tesira expanders to form a highly scalable audio network. Tesira SERVER supports primary and secondary redundant media network connections to provide resilient audio streaming. If the primary media network experiences downtime, the secondary connection takes over with no loss of continuity.",
    channels: 420,
    processingType: "DSP",
    price: 1699.99,
    releaseDate: new Date("2018-03-01"),
  },
  {
    name: "Tesira SERVER-IO",
    model: "DSP-S101",
    description:
      "The Tesira SERVER-IO is a digital network server. It is factory configured with one DSP-2 card and is capable of handling up to two additional DSP-2 cards. The SERVER-IO has capacity for up to three total audio networking cards per server. The combinations of networking cards may include one AVB-1 Audio Video Bridging network cards, up to two SCM-1 CobraNet network cards, and up to two DAN-1 Dante network cards in any configuration. The SERVER-IO can support up to 12 standard Tesira I/O cards for up to 48 channels of audio I/O (e.g. mic and line level, VoIP, and FXO telephone interface). The SERVER-IO can be used as a standalone device or with Tesira expanders to form a highly scalable audio network.",
    channels: 420,
    processingType: "DSP",
    price: 1999.99,
    releaseDate: new Date("2018-03-01"),
  },
  {
    name: "Tesira FORTE AI",
    model: "AI-1000",
    description:
      "The TesiraFORTÉ AI is a digital audio server (fixed audio I/O DSP) with 12 analog inputs and 8 analog outputs, and includes up to 8 channels of configurable USB audio.",
    channels: 12,
    processingType: "DSP",
    price: 399.99,
    releaseDate: new Date("2021-05-15"),
  },
  {
    name: "Tesira FORTE DAN AI",
    model: "AI-1020",
    description:
      "The TesiraFORTÉ DAN AI is a digital audio server with 12 analog inputs and 8 analog outputs, up to 8 channels of configurable USB audio, and Dante digital audio networking.",
    channels: 12,
    processingType: "DSP",
    price: 499.99,
    releaseDate: new Date("2021-05-15"),
  },
  {
    name: "Tesira FORTE AVB AI",
    model: "AI-1010",
    description:
      "The TesiraFORTÉ AVB AI is a digital audio server with 12 analog inputs and 8 analog outputs, and up to 8 channels of configurable USB audio. TesiraFORTÉ AVB AI utilizes AVB/TSN digital audio networking, and can be used as a standalone device or combined with other TesiraFORTÉ AVB devices and Tesira servers, expanders, endpoints, and controllers.",
    channels: 12,
    processingType: "DSP",
    price: 499.99,
    releaseDate: new Date("2021-05-15"),
  },
  {
    name: "Tesira FORTE CI",
    model: "CI-1000",
    description:
      "The TesiraFORTÉ CI is a digital audio server with 12 analog inputs and 8 analog outputs, and includes Acoustic Echo Cancellation (AEC) technology on all 12 inputs. It also includes up to 8 channels of configurable USB audio.",
    channels: 12,
    processingType: "DSP",
    price: 499.99,
    releaseDate: new Date("2020-05-15"),
  },
  {
    name: "Tesira FORTE DAN CI",
    model: "CI-1010",
    description:
      "The TesiraFORTÉ DAN CI is a digital audio server with 12 analog inputs and 8 analog outputs, and includes Acoustic Echo Cancellation (AEC) technology on all 12 inputs. It includes up to 8 channels of configurable USB audio and Dante digital audio networking.",
    channels: 12,
    processingType: "DSP",
    price: 699.99,
    releaseDate: new Date("2020-05-15"),
  },
  {
    name: "Tesira FORTE AVB CI",
    model: "CI-1020",
    description:
      "The TesiraFORTÉ AVB CI is a digital audio server with 12 analog inputs — each with Acoustic Echo Cancellation (AEC) technology, 8 analog outputs, and up to 8 channels of configurable USB audio. TesiraFORTÉ AVB CI utilizes AVB/TSN digital audio networking, and can be used as a standalone device or combined with other TesiraFORTÉ AVB devices and Tesira servers, expanders, endpoints, and controllers.",
    channels: 12,
    processingType: "DSP",
    price: 699.99,
    releaseDate: new Date("2020-05-15"),
  },
  {
    name: "Tesira FORTE VT",
    model: "VT-1000",
    description:
      "The TesiraFORTÉ VT is a digital audio server with 12 analog inputs and 8 analog outputs, and includes Acoustic Echo Cancellation (AEC) technology on all 12 inputs. It includes up to 8 channels of configurable USB audio, a 2-channel VoIP interface, and a standard FXO telephone interface.",
    channels: 12,
    processingType: "DSP",
    price: 299.99,
    releaseDate: new Date("2018-05-15"),
  },
  {
    name: "Tesira FORTE DAN VT",
    model: "VT-1010",
    description:
      "The TesiraFORTÉ DAN VT is a digital audio server with 12 analog inputs and 8 analog outputs, and includes Acoustic Echo Cancellation (AEC) technology on all 12 inputs. It includes up to 8 channels of configurable USB audio, a 2-channel VoIP interface, a standard FXO telephone interface, and Dante digital audio networking.",
    channels: 16,
    processingType: "DSP",
    price: 349.99,
    releaseDate: new Date("2018-05-15"),
  },
  {
    name: "Tesira FORTE AVB VT",
    model: "VT-1020",
    description:
      "The TesiraFORTÉ AVB VT is a digital audio server with 12 analog inputs and 8 analog outputs, and includes Acoustic Echo Cancellation (AEC) technology on all 12 inputs. It includes up to 8 channels of configurable USB audio, a 2-channel VoIP interface, and a standard FXO telephone interface. TesiraFORTÉ AVB VT utilizes AVB/TSN for digital audio networking and can be used as a standalone device or combined with other TesiraFORTÉ AVB devices and Tesira servers, expanders, endpoints, and controllers.",
    channels: 12,
    processingType: "DSP",
    price: 349.99,
    releaseDate: new Date("2018-05-15"),
  },
  {
    name: "Tesira FORTE AVB VT4",
    model: "VT-4020",
    description:
      "The TesiraFORTÉ AVB VT4 is a digital audio server with 4 analog inputs and 4 analog outputs, and includes Acoustic Echo Cancellation (AEC) technology on all 4 inputs. It includes up to 8 channels of configurable USB audio, a 2-channel VoIP interface, and a standard FXO telephone interface. TesiraFORTÉ AVB VT4 utilizes AVB/TSN digital audio networking, and can be used as a standalone device or combined with other TesiraFORTÉ AVB devices and Tesira DSPs, expanders, endpoints, and controllers.",
    channels: 4,
    processingType: "DSP",
    price: 249.99,
    releaseDate: new Date("2019-05-15"),
  },
  {
    name: "Tesira FORTE DAN VT4",
    model: "VT-4010",
    description:
      "The TesiraFORTÉ DAN VT4 is a digital audio server with 4 analog inputs and 4 analog outputs, and includes Acoustic Echo Cancellation (AEC) technology on all 4 inputs. It includes up to 8 channels of configurable USB audio, a 2-channel VoIP interface, a standard FXO telephone interface, and Dante digital audio networking.",
    channels: 4,
    processingType: "DSP",
    price: 249.99,
    releaseDate: new Date("2019-05-15"),
  },
];

// Function to save Biamp products to the database
async function saveBiampProducts() {
  try {
    for (const productData of biampProducts) {
      const biampProduct = new Product(productData);
      await biampProduct.save();
      console.log(`Saved Biamp product: ${biampProduct.name}`);
    }
  } catch (error) {
    console.error("Error saving Biamp products:", error);
  } finally {
    mongoose.connection.close();
  }
}

// Call the function to save Biamp products
saveBiampProducts();
