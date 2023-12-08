import iphone from "../assets/images/iphone.png"
import laptop from "../assets/images/laptop.png"
import oneplus from "../assets/images/oneplus.png"
import smartwatch from "../assets/images/smartwatch.png"
import TV from "../assets/images/smart tv.png"
import airpods from "../assets/images/airpods.png"
import Tab from "../assets/images/tab.png"
import soundbar from "../assets/images/soundbar.png"
import AC from "../assets/images/AC.png"
import camera from "../assets/images/camera.png"
import mixer from "../assets/images/mixer.png"
import playstation from "../assets/images/playstation.png"
import printer from "../assets/images/printer.png"
import purifier from "../assets/images/purifier.png"
import refrigerator from "../assets/images/refrigerator.png"
import headset from "../assets/images/headset.png"
import dryer from "../assets/images/hair dryer.png"
import oven from "../assets/images/microwave oven.png"
import socket from "../assets/images/socket.png"
import washingMachine from "../assets/images/washing machine.png"




const INITIAL_STATE = {
  products: [
    {
      id: 1,
      title: "Apple iPhone 14 Pro (128GB, Deep Purple)",
      price: 1431.19,
      description: "Display: 6.1 inches (15.54 cm) OLED Display, Memory: 128GB ROM,  Processor: A16 Bionic Chip, Hexa Core, Camera: 48 MP + 12 MP + 12 MP Triple Rear & 12 MP Front Camera,Battery: Qi Wireless Charging Up to 7.5W,Security (Lock): Facial Lock",
      category: "electronics",
      image: iphone,
      rating: {
        rate: 4.2,
        count: 120,
      },
    },
    {
      id: 2,
      title: "HP 15s-fr5009TU Intel Core i3 12th Gen ",
      price: 457,
      description: "Display : 39.6 cms (15.6 inches), FHD,Memory : 8GB DDR4 RAM, 512GB SSD ROM,Processor : Intel Core i3 12th Generation,OS : Windows 11 Home,Graphics : Intel UHD,Included Software: MS Office Home & Student 2021,Warranty: 1 year Onsite",
      category: "electronics",
      image: laptop,
      rating: {
        rate: 4.1,
        count: 259,
      },
    },
    {
      id: 3,
      title: "OnePlus Nord CE 3 Lite 5G",
      price: 240.5,
      description: "Display: 6.72 inches (17.07 cm), LCD, 120 Hz Refresh Rate, Memory: 8GB RAM, 256GB ROM,Processor: Qualcomm Snapdragon 695 5G, Octa Core, 2.2 GHz,Camera: 108 MP + 2 MP + 2 MP Triple Rear Camera + 16 MP Front Camera,Battery: 5000 mAh with 67W Charging Power,USP: Dual Stereo Speakers, Face Unlock",
      category: "electronics",
      image: oneplus,
      rating: {
        rate: 4.7,
        count: 500,
      },
    },
    {
      id: 4,
      title: "NoiseFit Force Plus Smartwatch with Bluetooth Calling",
      price: 28.9,
      description: "3.7 cms (1.46 Inches) AMOLED Display ,Call & Text Function | Social Media Alerts ,130 Plus Sports Mode | Heart Rate | SPO2 Monitor | Sleep Monitor | Stress and Breath Monitor| Calorie Counter | Female Cycle.Upto 7 Days Battery Life,IP67 Water resistance",
      category: "electronics",
      image: smartwatch,
      rating: {
        rate: 2.1,
        count: 430,
      },
    },
    {
      id: 5,
      title: "Apple AirPods Pro (2nd Generation) TWS Earbuds with Active Noise Cancellation",
      price: 300,
      description: "From Orientation Type: In Ear,Connectivity: Bluetooth Version 5.3. Battery Life: 30Hours,Fast Charging: Yes,Noise Cancellation: Active Noise Cancellation,Voice Assistant: Siri.USP: IP54 Water & Sweat Resistant, Adaptive EQ.",
      category: "electronics",
      image: airpods,
      rating: {
        rate: 4.6,
        count: 400,
      },
    },
    {
      id: 6,
      title: "SAMSUNG Series 4 80 cm (32 inch) HD LED Smart TV ",
      price: 168,
      description: "Display: LED HD Ready, 1366 x 768 pixels, 60 Hz Refresh Rate, Connectivity: 2 HDMI | 1 USB | Wi-Fi,Operating System: Tizen.Apps: Sony Liv, Eros Now, Jio Cinema, Gaana,Sound: 20 W Speaker, Dolby Digital Plus,USP: Mega Contrast Enhancer, Game Mode",
      category: "electronics",
      image: TV,
      rating: {
        rate: 3.9,
        count: 70,
      },
    },
    {
      id: 7,
      title: "Croma CRES1098 240W Bluetooth Soundbar with Remote ",
      price: 120.56,
      description: "Connectivity: Bluetooth v5.0 | USB | AuxPower Output: 240W ,Configuration: 2.1 Channel. Power Source: AC Adapter USP: Heavy Bass and Treble | Premium Design | Remote Control, Warranty: 12 months warranty",
      category: "electronics",
      image: soundbar,
      rating: {
        rate: 3,
        count: 400,
      },
    },
    {
      id: 8,
      title: "VOLTAS 183V Vectra 3 Star Inverter Split AC with Anti Dust Filter",
      price: 200.78,
      description: "1.5 Ton Inverter Split AC, 3 Star Rating Copper Condenser,1 Year Comprehensive Warranty, 10 Years Compressor Warranty.For Rooms up to 180 sqft,Power Consumption: 1615W,Refrigerant: R32,High Ambient Cooling, Anti Microbial Air Filteration",
      category: "electronics",
      image: AC,
      rating: {
        rate: 1.9,
        count: 100,
      },
    },
    {
      id: 9,
      title: "Nikon D780 25.28 MP DSLR Camera with 24-120 mm VR Lens",
      price: 900.7,
      description: "24.5 MP, DSLR Camera Suitable For: Hobbyist.Single Lens Kit CMOS Sensor,Dimensions - 14.35 x 7.6 x 11.55 cms,12 Months Warranty",
      category: "electronics",
      image:camera,
      rating: {
        rate: 3.3,
        count: 203,
      },
    },
    {
      id: 10,
      title: "SAMSUNG Galaxy Tab S6 Lite Wi-Fi Android Tablet ",
      price: 109,
      description:"10.4 inches (26.31 cm) WUXGA+ TFT Display,4 GB RAM, 64 GB ROM, Expandable upto 1 TB.Qualcomm Snapdragon, 8 Core, 2.3 GHz,Android OS 7040 mAh Battery,8 MP Primary Camera, 5 MP Front Camera",
      category: "electronics",
      image:Tab,
      rating: {
        rate: 2.9,
        count: 470,
      },
    },
    {
      id: 11,
      title: "SONY DualSense Wireless Controller for Playstation 5",
      price: 80,
      description:
        "Controller Compatible Model Series/Model Number: PS5. Interface: Wireless Controller,Integrated Speaker.Dimensions - 16.00 x 10.60 x 6.60 cms",
      category: "electronics",
      image: playstation,
      rating: {
        rate: 4.8,
        count: 319,
      },
    },
    {
      id: 12,
      title: "PHILIPS Hair Dyer (Foldable Handle, BHC010/10)",
      price: 14,
      description: "Operation Type: With Cord ,Functions: Hair Dry,Ideal For: Personal Use | Professional Use, 3 Temperature Settings.Power: 1200 Watts",
      category: "electronics",
      image: dryer,
      rating: {
        rate: 4.8,
        count: 400,
      },
    },
    {
      id: 13,
      title: "Croma 500 Watt 3 Jars Mixer Grinder (Rust Resistant, White)",
      price: 20.6,
      description:
        "Watt: 500 W Motor ,Functions: Blending, Wet Grinding, Dry Grinding .Jar Types: 1.0L Liquidizing Jar, 0.5L Grinding Jar, 0.3L Chutney Grinding Jar,Blades: 3 Stainless Steel Blades.Body Material: ABS Plastic & Stainless Steel",
      category: "electronics",
      image: mixer,
      rating: {
        rate: 2.9,
        count: 250,
      },
    },
    {
      id: 14,
      title: "KENT Grand Plus 9L RO + UV + UF + TDS Water Purifier ",
      price: 130.99,
      description: "Purification Process: RO, UV, UF, TDS,Filtration Capacity: 20L/hr.Storage Capacity: 9 Litres,Retains Essential Minerals, Zero Water Wastage Technology, Food Grade Plastic",
      category: "electronics",
      image:purifier,
      rating: {
        rate: 2.2,
        count: 140,
      },
    },
    {
      id: 15,
      title: "Croma 165 Litres 2 Star Direct Cool Single Door Refrigerator ",
      price: 110.2,
      description:
        "165 Litres, 2 Star Rating, Normal Compressor.Ideal for Family of 1 - 2 Member,PCM Metal Finish Design, Hassle-Free Stabilizer Free Operation, Efficient Direct Cooling",
      category: "electronics",
      image: refrigerator,
      rating: {
        rate: 2.6,
        count: 235,
      },
    },
    {
      id: 16,
      title: "SAMSUNG 5 Star Inverter Fully Automatic Top Load Washing Machine ",
      price: 129.95,
      description: "6.5kg, Top Load, Inverter Fully Automatic,BEE 5 Star Rating.Ideal for 4-6 Family Size,9 Wash Programs .Wobble Technology, Magic Filter, Smart Check",
      category: "electronics",
      image: washingMachine,
      rating: {
        rate: 2.9,
        count: 340,
      },
    },
    {
      id: 17,
      title: "Marshall Bluetooth Headset with Mic (80+ Playback, On Ear)",
      price: 99.99,
      description:
        "Orientation Type: On Ear,Connectivity: Bluetooth, Version 5.0.Battery Life: 80 Hours Playback,Noise Cancellation:yes,USP: Wireless Charging, Multifunction Controls",
      category: "electronics",
      image: headset,
      rating: {
        rate: 3.8,
        count: 679,
      },
    },
    {
      id: 18,
      title: "HP Deskjet Inkjet Printer",
      price: 79.85,
      description: "Print | Copy | Scan, Ideal For: Office & Home,Inkjet Printer, Flat Bed Scanner.Color Print,Max Monthly Duty Cycle: Up to 1000 Pages",
      category: "electronics",
      image: printer,
      rating: {
        rate: 4.7,
        count: 130,
      },
    },
    {
      id: 19,
      title: "LG 28L Convection Microwave Oven with 251 Autocook Menu (Black)",
      price: 87.95,
      description: "28 Litres, Convection Microwave,Ideal for Heating, Cooking, Defrosting & Grilling.Controls: Buttons, Rotary Wheel,Interior: Stainless Steel.No. of Programs: 251 Autocook Menu,Diet Fry, Roti Basket, Child Lock",
      category: "electronics",
      image: oven,
      rating: {
        rate: 4.5,
        count: 146,
      },
    },
    {
      id: 20,
      title: "Croma 6 Amps 5 Sockets Surge Protector With Individual Switch",
      price: 12.99,
      description: "Ideal For: Home Appliances | Mobile | Television,In-Built Protection System.Capacity: 6 Amps,Fast and Smart charge Power: 2500 Watts (Max)",
      category: "electronics",
      image: socket,
      rating: {
        rate: 3.6,
        count: 145,
      },
    },
  ],
  cart: [],
  currentItem: null,
};

export default INITIAL_STATE;
