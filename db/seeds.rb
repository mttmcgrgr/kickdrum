# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)
  User.destroy_all;
  Post.destroy_all;


User.create!([
  { username: 'Guest', password: '123456'},
  { username: 'mttmcgrgr', password: '123456'},
  { username: 'Noelle', password: '123456'}
  ])


Post.create!([
  {
    title:"33 GOD",
    artist: 'Bon Iver',
    song_url: 'https://res.cloudinary.com/dccshngpp/video/upload/v1484880316/04_33__GOD__carbpb.m4a',
    cover_url: 'https://res.cloudinary.com/dccshngpp/image/upload/v1484880943/Bon-Iver-22-A-Million-1475098371-640x6401-1475190161-640x640_l4jf80.jpg',
    user_id: User.third.id
  },


  {
    title:"Eighteen",
    artist: 'Joyce Manor',
    song_url: 'https://res.cloudinary.com/dccshngpp/video/upload/v1484880184/02_Eighteen_kowamx.m4a',
    cover_url: 'https://res.cloudinary.com/dccshngpp/image/upload/v1484880854/a0719203174_10_ua211w.jpg',
    user_id: User.third.id
  },


  {
    title:"What If...",
    artist: 'Modern Baseball',
    song_url: 'https://res.cloudinary.com/dccshngpp/video/upload/v1484880154/1-10_What_If..._edwd2f.mp3',
    cover_url: 'https://res.cloudinary.com/dccshngpp/image/upload/v1484880853/a4043831127_10_ndqy6f.jpg',
    user_id: User.third.id
  },


  {
    title:"High and Low",
    artist: 'Empire of the Sun',
    song_url: 'https://res.cloudinary.com/dccshngpp/video/upload/v1484880305/01_High_And_Low_gwqfsp.mp3',
    cover_url: 'https://res.cloudinary.com/dccshngpp/image/upload/v1484880852/Empire-Of-The-Sun-Two-Vines-compressed_qhlwow.jpg',
    user_id: User.third.id
  },


  {
    title:'Goin Down',
    artist: 'Dinosuar Jr.',
    song_url: 'https://res.cloudinary.com/dccshngpp/video/upload/v1484435807/bvpty0zenklojkxgvx8s.mp3',
    cover_url: 'https://res.cloudinary.com/dccshngpp/image/upload/v1484435821/bcafomdxo76q8x1sak7p.jpg',
    user_id: User.first.id
  },

  {

    title:'Yr Not Far',
    artist: 'DIIV',
    song_url: 'https://res.cloudinary.com/dccshngpp/video/upload/v1484268365/07_Yr_Not_Far_o09gdt.mp3',
    cover_url: 'https://res.cloudinary.com/dccshngpp/image/upload/v1484268378/DIIV_-_Is_the_Is_Are_x913kq.jpg',
    user_id: User.first.id
  },


  {
    title:"Nobody's Baby",
    artist: 'Sheer Mag',
    song_url: 'https://res.cloudinary.com/dccshngpp/video/upload/v1484353237/g564z2p7wdcq2koxl90b.mp3',
    cover_url: 'https://res.cloudinary.com/dccshngpp/image/upload/v1484369598/a4036960880_5_lppkd5.jpg',
    user_id: User.first.id
  },


  {
    title:"See No Evil",
    artist: 'Television',
    song_url: 'https://res.cloudinary.com/dccshngpp/video/upload/v1484368581/od1m3cd1suootuwaf3rl.mp3',
    cover_url: 'https://res.cloudinary.com/dccshngpp/image/upload/v1484369689/599c9a11_ibz0x5.jpg',
    user_id: User.first.id
  },


    {
    title:"Finally",
    artist: 'Cymbals Eat Guitars',
    song_url: 'https://res.cloudinary.com/dccshngpp/video/upload/v1484622910/cu7l98tanxdghiogd5zo.mp3',
    cover_url: 'https://res.cloudinary.com/dccshngpp/image/upload/v1484623799/tkrll3ozocdwb37mflyw.jpg',
    user_id: User.second.id
  },


  {
  title:"True Love Waits",
  artist: 'Radiohead',
  song_url: 'https://res.cloudinary.com/dccshngpp/video/upload/v1484629374/11_True_Love_Waits_gi18hg.mp3',
  cover_url: 'https://res.cloudinary.com/dccshngpp/image/upload/v1484636084/0080052016_emd7uq.jpg',
  user_id: User.third.id
},


  {
  title:"Fight For Your Right",
  artist: 'Beastie Boys',
  song_url: 'https://res.cloudinary.com/dccshngpp/video/upload/v1484636248/07_Fight_For_Your_Right_xk8afu.mp3',
  cover_url: 'https://res.cloudinary.com/dccshngpp/image/upload/v1484636308/MI0000702880.jpg_pav4qg.jpg',
  user_id: User.second.id
},


{
title:"Narcoleptic",
artist: 'White Lung',
song_url: 'https://res.cloudinary.com/dccshngpp/video/upload/v1484636935/02_Narcoleptic_hoxmfe.mp3',
cover_url: 'https://res.cloudinary.com/dccshngpp/image/upload/v1484870707/a0852303980_10_aqehwl.jpg',
user_id: User.second.id
},


{
title:"Legend Has It",
artist: 'Run The Jewels',
song_url: 'https://res.cloudinary.com/dccshngpp/video/upload/v1484717187/03_Legend_Has_It_ww3svi.mp3',
cover_url: 'https://res.cloudinary.com/dccshngpp/image/upload/v1484717333/RunTheJewels3_vh3kqv.jpg',
user_id: User.second.id
},


{
title:"Sharp Knife",
artist: 'Third Eye Blind',
song_url: 'https://res.cloudinary.com/dccshngpp/video/upload/v1484717499/04_Sharp_Knife_xzxg9y.mp3',
cover_url: 'https://res.cloudinary.com/dccshngpp/image/upload/v1484717599/third-eye-blind-ursa-major_mus0ku.jpg',
user_id: User.first.id
},


{
title:"Young Death",
artist: 'Burial',
song_url: 'https://res.cloudinary.com/dccshngpp/video/upload/v1484717770/01_Young_Death_g7xcvv.mp3',
cover_url: 'https://res.cloudinary.com/dccshngpp/image/upload/v1484717968/homepage_large.e19a898b_cbft8u.jpg',
user_id: User.second.id
},

{
  title:"Near To The Wild Heart of Life",
  artist: 'Japandroids',
  song_url: 'http://res.cloudinary.com/dccshngpp/video/upload/v1484880333/01_Near_To_The_Wild_Heart_Of_Life_cwju3i.mp3',
  cover_url: 'https://res.cloudinary.com/dccshngpp/image/upload/v1484880852/japandroids7_bzj2hw.jpg',
  user_id: User.second.id
},

{
title:"Modern Act",
artist: 'Cloud Nothings',
song_url: 'https://res.cloudinary.com/dccshngpp/video/upload/v1484718138/2016-11-03_2805_cloud_nothings_-_modern_act_imjsvd.mp3',
cover_url: 'https://res.cloudinary.com/dccshngpp/image/upload/v1484718231/18948738_life-without-sound_fyakql.jpg',
user_id: User.first.id
}


])
