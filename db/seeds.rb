# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)



User.create!([
  { username: 'Guest', password: '123456'},
  { username: 'mttmcgrgr', password: '123456'}
  ])


Post.create!([{
  title:'Goin Down',
  artist: 'Dinosuar Jr.',
  song_url: 'http://res.cloudinary.com/dccshngpp/video/upload/v1484435807/bvpty0zenklojkxgvx8s.mp3',
  cover_url: 'http://res.cloudinary.com/dccshngpp/image/upload/v1484435821/bcafomdxo76q8x1sak7p.jpg',
  user_id: 1
  },
  {
    title:'Yr Not Far',
    artist: 'DIIV',
    song_url: 'http://res.cloudinary.com/dccshngpp/video/upload/v1484268365/07_Yr_Not_Far_o09gdt.mp3',
    cover_url: 'http://res.cloudinary.com/dccshngpp/image/upload/v1484268378/DIIV_-_Is_the_Is_Are_x913kq.jpg',
    user_id: 1
  },
  {
    title:"Nobody's Baby",
    artist: 'Sheer Mag',
    song_url: 'http://res.cloudinary.com/dccshngpp/video/upload/v1484353237/g564z2p7wdcq2koxl90b.mp3',
    cover_url: 'http://res.cloudinary.com/dccshngpp/image/upload/v1484369598/a4036960880_5_lppkd5.jpg',
    user_id: 1
  },
  {
    title:"See No Evil",
    artist: 'Television',
    song_url: 'http://res.cloudinary.com/dccshngpp/video/upload/v1484368581/od1m3cd1suootuwaf3rl.mp3',
    cover_url: 'http://res.cloudinary.com/dccshngpp/image/upload/v1484369689/599c9a11_ibz0x5.jpg',
    user_id: 1
  },
    {
    title:"Finally",
    artist: 'Cymbals Eat Guitars',
    song_url: 'http://res.cloudinary.com/dccshngpp/video/upload/v1484622910/cu7l98tanxdghiogd5zo.mp3',
    cover_url: 'http://res.cloudinary.com/dccshngpp/image/upload/v1484623799/tkrll3ozocdwb37mflyw.jpg',
    user_id: 2
  },
  {
  title:"True Love Waits",
  artist: 'Radiohead',
  song_url: 'http://res.cloudinary.com/dccshngpp/video/upload/v1484629374/11_True_Love_Waits_gi18hg.mp3',
  cover_url: 'http://res.cloudinary.com/dccshngpp/image/upload/v1484636084/0080052016_emd7uq.jpg',
  user_id: 2
},
  {
  title:"Fight For Your Right",
  artist: 'Beastie Boys',
  song_url: 'http://res.cloudinary.com/dccshngpp/video/upload/v1484636248/07_Fight_For_Your_Right_xk8afu.mp3',
  cover_url: 'http://res.cloudinary.com/dccshngpp/image/upload/v1484636308/MI0000702880.jpg_pav4qg.jpg',
  user_id: 2
},
{
title:"Narcoleptic",
artist: 'White Lung',
song_url: 'http://res.cloudinary.com/dccshngpp/video/upload/v1484636935/02_Narcoleptic_hoxmfe.mp3',
cover_url: 'https://f4.bcbits.com/img/a0852303980_10.jpg',
user_id: 2
},
{
title:"Legend Has It",
artist: 'Run The Jewels',
song_url: 'http://res.cloudinary.com/dccshngpp/video/upload/v1484717187/03_Legend_Has_It_ww3svi.mp3',
cover_url: 'http://res.cloudinary.com/dccshngpp/image/upload/v1484717333/RunTheJewels3_vh3kqv.jpg',
user_id: 2
},
{
title:"Sharp Knife",
artist: 'Third Eye Blind',
song_url: 'http://res.cloudinary.com/dccshngpp/video/upload/v1484717499/04_Sharp_Knife_xzxg9y.mp3',
cover_url: 'http://res.cloudinary.com/dccshngpp/image/upload/v1484717599/third-eye-blind-ursa-major_mus0ku.jpg',
user_id: 1
},
{
title:"Young Death",
artist: 'Burial',
song_url: 'http://res.cloudinary.com/dccshngpp/video/upload/v1484717770/01_Young_Death_g7xcvv.mp3',
cover_url: 'http://res.cloudinary.com/dccshngpp/image/upload/v1484717968/homepage_large.e19a898b_cbft8u.jpg',
user_id: 2
},
{
title:"Modern Act",
artist: 'Cloud Nothings',
song_url: 'http://res.cloudinary.com/dccshngpp/video/upload/v1484718138/2016-11-03_2805_cloud_nothings_-_modern_act_imjsvd.mp3',
cover_url: 'http://res.cloudinary.com/dccshngpp/image/upload/v1484718231/18948738_life-without-sound_fyakql.jpg',
user_id: 1
}

])
