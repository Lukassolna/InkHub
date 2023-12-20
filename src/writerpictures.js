export const writerPictures = [
  "https://live.staticflickr.com/65535/53395364179_8495ff1570_b.jpg",
  "https://live.staticflickr.com/65535/53395053671_d203bb5e15_b.jpg",
  "https://live.staticflickr.com/65535/53395053666_3f9d875512_b.jpg",
  "https://live.staticflickr.com/65535/53395053646_bc1703898a_b.jpg",
  "https://live.staticflickr.com/65535/53395053651_5bcd48720c_b.jpg",
  "https://live.staticflickr.com/65535/53395364184_e2fef8db8e_b.jpg",
  "https://live.staticflickr.com/65535/53395053681_94fd0b90d3_b.jpg",
  "https://live.staticflickr.com/65535/53394128917_31136ec11d_b.jpg",
  "https://live.staticflickr.com/65535/53395364274_8fd7df1632_b.jpg",
  "https://live.staticflickr.com/65535/53394128907_ed6e9cf8f6_b.jpg",
  "https://live.staticflickr.com/65535/53394128922_8e30c560de_b.jpg",
  "https://live.staticflickr.com/65535/53395494670_c3eddf35bb_b.jpg",
  "https://live.staticflickr.com/65535/53395494675_49e5876ac1_b.jpg",
  "https://live.staticflickr.com/65535/53395053801_b650c3277c_b.jpg",
  "https://live.staticflickr.com/65535/53395494760_8830701718_b.jpg",
  "https://live.staticflickr.com/65535/53395053816_b389cb1716_b.jpg",
  "https://live.staticflickr.com/65535/53395364339_2ae661be59_b.jpg",
  "https://live.staticflickr.com/65535/53395053866_f159a1d128_b.jpg",
  "https://live.staticflickr.com/65535/53395364329_263b7bfe93_b.jpg",
  "https://live.staticflickr.com/65535/53395053871_cc19a935d8_b.jpg",
  "https://live.staticflickr.com/65535/53395494795_8e61b7f0e6_b.jpg",
  "https://live.staticflickr.com/65535/53395494820_1ff991f93b_b.jpg",
  "https://live.staticflickr.com/65535/53395494835_8247cf0d35_b.jpg",
  "https://live.staticflickr.com/65535/53394129062_7a56bbd008_b.jpg",
  "https://live.staticflickr.com/65535/53395494845_0f10bca88d_b.jpg",
];

export function nameToNumber(name) {
  let sum = 0;
  let temp = name;
  for (let i = 0; i < name.length; i++) {
    sum += temp.charCodeAt(i); // Add ASCII value of each character
  }
  return sum % 25; // Use modulo 51 to keep it within 0-50
}
