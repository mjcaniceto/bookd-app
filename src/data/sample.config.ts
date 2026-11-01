import type { Camera } from "../types/index";

export const brand = {
  name: "Soju Snaps",
  bio: "Rent. Record. Remember.",   
};

export const cameras: Camera[] = [
  {
    id: "g7x-mark-ii",
    name: "Canon PowerShot G7 X Mark II",
    tagline: "The 'IT Girl's' go-to camera for portraits",
    price_per_day: 499,
    rating: 4.9,
    rentals: 230,
    accent: "G7X",
    images: [
      "https://asia.canon/media/image/2018/08/01/45f84dc67b324ec7bf517d67f9f8c306_powershot-g7-x-mark-ii-02.png",
    ],
    specs: [
      { label: "Sensor", value: "1\" 20.1MP CMOS" },
      { label: "Lens", value: "24-100mm f/1.8-2.8" },
      { label: "Video", value: "1080p 60fps" },
      { label: "Stabilization", value: "Optical IS" },
      { label: "Screen", value: "3\" Tilt Touch" },
      { label: "Weight", value: "319g" },
    ],
    inclusions: ["Camera", "Battery x1", "Charger", "64GB SD Card", "Hard-Case", "Wrist Strap", "Lens Cloth", "Mini Ulanzi Tripod", "UGreen Card Reader"],
    booked_dates: ["2026-09-08", "2026-09-09", "2026-09-18"],
  },
  {
    id: "instax-mini-11",
    name: "Instax Mini 11",
    tagline: "Capture your most memorable moments instantly in film",
    price_per_day: 249,
    rating: 4.6,
    rentals: 210,
    accent: "mini12",
    images: [
      "https://www.instaxus.com/wp-content/uploads/2023/02/230111-Instax-Mini-12-Clay-White-Front-No-Photo_0118_Stack.png",
    ],
    specs: [
      { label: "Sensor", value: "APS-C 24.2MP" },
      { label: "Lens Mount", value: "Sony E-mount" },
      { label: "Video", value: "4K 30fps" },
      { label: "Autofocus", value: "425-point Hybrid" },
      { label: "Screen", value: "3\" Flip Touch" },
      { label: "Weight", value: "403g" },
    ],
    inclusions: ["Camera", "Film not-yet-included", "AA Battery x2", "Wrist Strap"],
    booked_dates: ["2026-09-05", "2026-09-06", "2026-09-07"],
  },
  {
    id: "canon-eos-70d",
    name: "Canon EOS 70D",
    tagline: "Professional-grade DSLR for high-quality photography and videography",
    price_per_day: 449,
    rating: 4.9,
    rentals: 152,
    accent: "70D",
    images: [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQocUP-3fWrMWz5FXLnR-idwWhKhHt7V-EZURpKG6M8Fg&s=10",
    ],
    specs: [
      { label: "Sensor", value: "APS-C 26.1MP X-Trans" },
      { label: "Lens Mount", value: "Canon EF-S mount" },
      { label: "Video", value: "4K 30fps" },
      { label: "Film Simulations", value: "18 modes" },
      { label: "Screen", value: "3\" Tilt Touch" },
      { label: "Weight", value: "378g" },
    ],
    inclusions: ["Camera", "Battery x1", "Charger", "64GB SD Card", "Carrying Case", "Lens Cloth", "UGreen Card Reader"],
    booked_dates: ["2026-09-12", "2026-09-13"],
  },
  {
    id: "instax-360-x3",
    name: "Instax 360 X3",
    tagline: "Instant 360-degree video to capture your adventures",
    price_per_day: 349,
    rating: 4.7,
    rentals: 289,
    accent: "HERO",
    images: [
      "https://res.insta360.com/dynamic/store/f2e10d555c43cc2a6bd6ec7e83293f64/2673_c9e9f363-3648-4aec-8f65-b114fdb3d603.png",
    ],
    specs: [
      { label: "Sensor", value: "1/1.9\" 27MP" },
      { label: "Video", value: "5.3K 60fps" },
      { label: "Waterproof", value: "Up to 10m" },
      { label: "Stabilization", value: "HyperSmooth 6.0" },
      { label: "Screen", value: "2.27\" Touch" },
      { label: "Weight", value: "154g" },
    ],
    inclusions: ["Camera", "Invisible Stick", "Silicon Lens Cover", "Battery x1", "USB-C Charger", "128GB SD Card", "UGreen Card Reader"],
    booked_dates: ["2026-09-20", "2026-09-21", "2026-09-22"],
  },
  {
    id: "dji-osmo-pocket-3",
    name: "DJI Osmo Pocket 3",
    tagline: "All-in-one gimbal creator cam",
    price_per_day: 449,
    rating: 4.8,
    rentals: 198,
    accent: "OSMO",
    images: [
      "https://www-cdn.djiits.com/cms/uploads/551e7d13228ed00e3486566918a183fd@374*374.png",
    ],
    specs: [
      { label: "Sensor", value: "1\" 9.4MP" },
      { label: "Gimbal", value: "3-axis mechanical" },
      { label: "Video", value: "4K 120fps" },
      { label: "Screen", value: "2\" Rotatable Touch" },
      { label: "Storage", value: "128GB Built-in" },
      { label: "Weight", value: "179g" },
    ],
    inclusions: ["Camera", "Hard-Case", "USB-C Charging Cable", "Mini Tripod", "Magnet Mount", "UGreen Card Reader"],
    booked_dates: ["2026-09-15"],
  },
];

export function getCameraById(id: string): Camera | undefined {
  return cameras.find((camera) => camera.id === id);
}