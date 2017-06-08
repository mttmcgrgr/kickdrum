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
  { username: 'Guest', password: '123456', photo_url: "http://res.cloudinary.com/dccshngpp/image/upload/v1489452204/default_pic.jpg"},
  { username: 'mttmcgrgr', password: '123456', photo_url: "http://res.cloudinary.com/dccshngpp/image/upload/v1496959781/16123928_1332802113439156_6000979656600190976_n_czvprv.jpg"},
  { username: 'noelle', password: '123456', photo_url: "http://res.cloudinary.com/dccshngpp/image/upload/v1496959784/13423015_1754629838088297_183801605_a_w1zkpv.jpg"},
  { username: 'smalkmus', password: '123456', photo_url: "http://res.cloudinary.com/dccshngpp/image/upload/v1496960284/download-1_l9z3xm.jpg"},
  { username: 'jmascis', password: '123456', photo_url: "http://res.cloudinary.com/dccshngpp/image/upload/v1496960282/download_pm0loa.jpg"}
  ])


Post.create!([
  {
    title:"33 GOD",
    artist: 'Bon Iver',
    song_url: 'https://res.cloudinary.com/dccshngpp/video/upload/v1484880316/04_33__GOD__carbpb.m4a',
    cover_url: 'https://res.cloudinary.com/dccshngpp/image/upload/v1484880943/Bon-Iver-22-A-Million-1475098371-640x6401-1475190161-640x640_l4jf80.jpg',
    user_id: User.first.id
  },

  {
    title:"Eighteen",
    artist: 'Joyce Manor',
    song_url: 'https://res.cloudinary.com/dccshngpp/video/upload/v1484880184/02_Eighteen_kowamx.m4a',
    cover_url: 'https://res.cloudinary.com/dccshngpp/image/upload/v1484880854/a0719203174_10_ua211w.jpg',
    user_id: User.first.id
  },

  {
    title:"What If...",
    artist: 'Modern Baseball',
    song_url: 'https://res.cloudinary.com/dccshngpp/video/upload/v1484880154/1-10_What_If..._edwd2f.mp3',
    cover_url: 'https://res.cloudinary.com/dccshngpp/image/upload/v1484880853/a4043831127_10_ndqy6f.jpg',
    user_id: User.first.id
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
    user_id: User.second.id
  },

  {
    title:'Yr Not Far',
    artist: 'DIIV',
    song_url: 'https://res.cloudinary.com/dccshngpp/video/upload/v1484268365/07_Yr_Not_Far_o09gdt.mp3',
    cover_url: 'https://res.cloudinary.com/dccshngpp/image/upload/v1484268378/DIIV_-_Is_the_Is_Are_x913kq.jpg',
    user_id: User.fourth.id
  },

  {
    title:"Nobody's Baby",
    artist: 'Sheer Mag',
    song_url: 'https://res.cloudinary.com/dccshngpp/video/upload/v1484353237/g564z2p7wdcq2koxl90b.mp3',
    cover_url: 'https://res.cloudinary.com/dccshngpp/image/upload/v1484369598/a4036960880_5_lppkd5.jpg',
    user_id: User.third.id
  },

  {
    title:"See No Evil",
    artist: 'Television',
    song_url: 'https://res.cloudinary.com/dccshngpp/video/upload/v1484368581/od1m3cd1suootuwaf3rl.mp3',
    cover_url: 'https://res.cloudinary.com/dccshngpp/image/upload/v1484369689/599c9a11_ibz0x5.jpg',
    user_id: User.fifth.id
  },

  {
    title:"Finally",
    artist: 'Cymbals Eat Guitars',
    song_url: 'https://res.cloudinary.com/dccshngpp/video/upload/v1484622910/cu7l98tanxdghiogd5zo.mp3',
    cover_url: 'https://res.cloudinary.com/dccshngpp/image/upload/v1484623799/tkrll3ozocdwb37mflyw.jpg',
    user_id: User.first.id
  },

  {
  title:"North East South West",
  artist: 'Japandroids',
  song_url: 'https://res.cloudinary.com/dccshngpp/video/upload/v1484937400/kebxahy0gml6mbi1pvf2.mp3',
  cover_url: 'https://res.cloudinary.com/dccshngpp/image/upload/v1484937619/xgcfjwkipqhexluwpd7b.jpg',
  user_id: User.fifth.id
  },

  {
  title:"True Love Waits",
  artist: 'Radiohead',
  song_url: 'https://res.cloudinary.com/dccshngpp/video/upload/v1484629374/11_True_Love_Waits_gi18hg.mp3',
  cover_url: 'https://res.cloudinary.com/dccshngpp/image/upload/v1484636084/0080052016_emd7uq.jpg',
  user_id: User.fourth.id
},

{
  title:"Fight For Your Right",
  artist: 'Beastie Boys',
  song_url: 'https://res.cloudinary.com/dccshngpp/video/upload/v1484636248/07_Fight_For_Your_Right_xk8afu.mp3',
  cover_url: 'https://res.cloudinary.com/dccshngpp/image/upload/v1484636308/MI0000702880.jpg_pav4qg.jpg',
  user_id: User.third.id
},

{
title:"Narcoleptic",
artist: 'White Lung',
song_url: 'https://res.cloudinary.com/dccshngpp/video/upload/v1484636935/02_Narcoleptic_hoxmfe.mp3',
cover_url: 'https://res.cloudinary.com/dccshngpp/image/upload/v1484870707/a0852303980_10_aqehwl.jpg',
user_id: User.first.id
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
user_id: User.fifth.id
},

{
title:"Young Death",
artist: 'Burial',
song_url: 'https://res.cloudinary.com/dccshngpp/video/upload/v1484717770/01_Young_Death_g7xcvv.mp3',
cover_url: 'https://res.cloudinary.com/dccshngpp/image/upload/v1484717968/homepage_large.e19a898b_cbft8u.jpg',
user_id: User.fourth.id
},

{
  title:"Near To The Wild Heart of Life",
  artist: 'Japandroids',
  song_url: 'http://res.cloudinary.com/dccshngpp/video/upload/v1484880333/01_Near_To_The_Wild_Heart_Of_Life_cwju3i.mp3',
  cover_url: 'https://res.cloudinary.com/dccshngpp/image/upload/v1484880852/japandroids7_bzj2hw.jpg',
  user_id: User.third.id
},

{
title:"Modern Act",
artist: 'Cloud Nothings',
song_url: 'https://res.cloudinary.com/dccshngpp/video/upload/v1484718138/2016-11-03_2805_cloud_nothings_-_modern_act_imjsvd.mp3',
cover_url: 'https://res.cloudinary.com/dccshngpp/image/upload/v1484718231/18948738_life-without-sound_fyakql.jpg',
user_id: User.second.id
},

{
title:"Tears Are Not Enough",
artist: 'ABC',
song_url: 'http://res.cloudinary.com/dccshngpp/video/upload/v1488341657/tearsnotenough.mp3',
cover_url: 'http://res.cloudinary.com/dccshngpp/image/upload/v1488341691/nlw39ybvurhob0oho9cf.jpg',
user_id: User.third.id
},

{
title:"Coffee and TV",
artist: 'Blur',
song_url: 'http://res.cloudinary.com/dccshngpp/video/upload/v1488341422/coffeetv.mp3',
cover_url: 'http://res.cloudinary.com/dccshngpp/image/upload/v1488341429/htem8amnuxrezbw0xgvl.png',
user_id: User.fourth.id
},

{
title:"Train In Vain",
artist: 'The Clash',
song_url: 'http://res.cloudinary.com/dccshngpp/video/upload/v1488341109/trainvain.mp3',
cover_url: 'http://res.cloudinary.com/dccshngpp/image/upload/v1488341119/aacriba2out8r7wiklht.jpg',
user_id: User.second.id
},

{
title:"Date With Ikea",
artist: 'Pavement',
song_url: 'http://res.cloudinary.com/dccshngpp/video/upload/v1488341040/dateikea.mp3',
cover_url: 'http://res.cloudinary.com/dccshngpp/image/upload/v1488341058/j7d6mijeyhouiwcyb8dl.jpg',
user_id: User.fifth.id
},

{
title:"For Boston",
artist: 'The Hold Steady',
song_url: 'http://res.cloudinary.com/dccshngpp/video/upload/v1488340950/forboston.mp3',
cover_url: 'http://res.cloudinary.com/dccshngpp/image/upload/v1488340956/fzodfm8n2ey6zp3jc4ch.jpg',
user_id: User.first.id
},

{
title:"Black Cab",
artist: 'Jens Lekman',
song_url: 'http://res.cloudinary.com/dccshngpp/video/upload/v1488340887/blackcab.mp3',
cover_url: 'http://res.cloudinary.com/dccshngpp/image/upload/v1488340894/meq1howb2fa3en1msrkv.jpg',
user_id: User.second.id
},

{
title:"I Am A Tree",
artist: 'Guided By Voices',
song_url: 'http://res.cloudinary.com/dccshngpp/video/upload/v1488340777/iamatree.mp3',
cover_url: 'http://res.cloudinary.com/dccshngpp/image/upload/v1488340817/dtxmktdjc2npt0jbmgat.jpg',
user_id: User.third.id
},

{
title:"Dancing On My Own",
artist: 'Robyn',
song_url: 'http://res.cloudinary.com/dccshngpp/video/upload/v1488340676/dancingonmyown.mp3',
cover_url: 'http://res.cloudinary.com/dccshngpp/image/upload/v1488340728/akee6ixkbh8jby8rpb2b.jpg',
user_id: User.fourth.id
},

{
title:"Changes",
artist: 'Sugar',
song_url: 'http://res.cloudinary.com/dccshngpp/video/upload/v1488340597/Changes.mp3',
cover_url: 'http://cdn3.pitchfork.com/albums/18030/29585f52.jpeg',
user_id: User.fifth.id
},

{
title:"Found Out About You",
artist: 'Gin Blossoms',
song_url: 'http://res.cloudinary.com/dccshngpp/video/upload/v1488344424/1-08_Found_Out_About_You_p0lbge.mp3',
cover_url: 'http://res.cloudinary.com/dccshngpp/image/upload/v1488344472/51hY4T0n4rL_r8giwi.jpg',
user_id: User.second.id
},

{
title:"All Caps",
artist: 'Madvillain',
song_url: 'http://res.cloudinary.com/dccshngpp/video/upload/v1488344253/15_All_Caps_fd60mr.mp3',
cover_url: 'http://res.cloudinary.com/dccshngpp/image/upload/v1488344819/62001587_o1_ufi7px.jpg',
user_id: User.third.id
},

{
title:"Obvious Child",
artist: 'Paul Simon',
song_url: 'http://res.cloudinary.com/dccshngpp/video/upload/v1488344274/1-01_The_Obvious_Child_vl8klu.mp3',
cover_url: 'http://res.cloudinary.com/dccshngpp/image/upload/v1488344786/51uwqEsFj1L_qemagt.jpg',
user_id: User.fourth.id
},


{
title:"Laid",
artist: 'James',
song_url: 'http://res.cloudinary.com/dccshngpp/video/upload/v1488344371/06_Laid_a9kjkn.mp3',
cover_url: 'http://res.cloudinary.com/dccshngpp/image/upload/v1488344563/61rbgNmn8SL_dwysth.jpg',
user_id: User.fourth.id
},

{
title:"Age of Consent",
artist: 'New Order',
song_url: 'http://res.cloudinary.com/dccshngpp/video/upload/v1488344358/1-01_Age_of_Consent_llt17c.mp3',
cover_url: 'http://res.cloudinary.com/dccshngpp/image/upload/v1488344601/tumblr_miga6bqsZ71qbm8lio1_1361248644_cover_lqvefq.jpg',
user_id: User.fifth.id
},

{
title:"Sunday Morning",
artist: 'No Doubt',
song_url: 'http://res.cloudinary.com/dccshngpp/video/upload/v1488344349/09_Sunday_Morning_tueut3.mp3',
cover_url: 'http://res.cloudinary.com/dccshngpp/image/upload/v1488344647/TragicKingdom-1024x1024_myvaxd.jpg',
user_id: User.first.id
},

{
title:"To Be Young",
artist: 'Ryan Adams',
song_url: 'http://res.cloudinary.com/dccshngpp/video/upload/v1488344333/02_To_Be_Young_Is_To_Be_Sad_Is_To_Be_High_ebfyg8.mp3',
cover_url: 'http://res.cloudinary.com/dccshngpp/image/upload/v1488344682/eaaddcf1_p8apzp.jpg',
user_id: User.second.id
},

{
title:"A Good Idea",
artist: 'Sugar',
song_url: 'http://res.cloudinary.com/dccshngpp/video/upload/v1488344327/1-02_A_Good_Idea_sdcxb8.mp3',
cover_url: 'http://cdn3.pitchfork.com/albums/18030/29585f52.jpeg',
user_id: User.third.id
},

{
title:"Limelight",
artist: 'Rush',
song_url: 'http://res.cloudinary.com/dccshngpp/video/upload/v1488344316/08_Limelight_rfy4ty.mp3',
cover_url: 'http://res.cloudinary.com/dccshngpp/image/upload/v1488344719/Moving_Pictures_pcekp2.jpg',
user_id: User.fourth.id
},

{
title:"There She Goes",
artist: "The La's",
song_url: 'http://res.cloudinary.com/dccshngpp/video/upload/v1488344392/05_There_She_Goes_ztq8va.mp3',
cover_url: 'http://res.cloudinary.com/dccshngpp/image/upload/v1488345292/thelas-1000x1000_gpossy.jpg',
user_id: User.third.id
},

{
title:"Headache",
artist: 'Frank Black',
song_url: 'http://res.cloudinary.com/dccshngpp/video/upload/v1488340523/headache.mp3',
cover_url: 'http://res.cloudinary.com/dccshngpp/image/upload/v1488340530/iyrqttx4d3gmdkjse639.jpg',
user_id: User.first.id
},

{
title:"Circles",
artist: 'Soul Coughing',
song_url: 'http://res.cloudinary.com/dccshngpp/video/upload/v1488340447/circle.mp3',
cover_url: 'http://res.cloudinary.com/dccshngpp/image/upload/v1488340453/zxnverzge6cimlnybzlf.jpg',
user_id: User.first.id
},

{
title:"Gone For Good",
artist: 'The Shins',
song_url: 'http://res.cloudinary.com/dccshngpp/video/upload/v1488340360/goneforgood.mp3',
cover_url: 'http://res.cloudinary.com/dccshngpp/image/upload/v1488340366/ant4jc3qlhalygwoiuti.png',
user_id: User.second.id
},

{
title:"Little Mascara",
artist: 'The Replacements',
song_url: 'http://res.cloudinary.com/dccshngpp/video/upload/v1488340284/littlemascara.mp3',
cover_url: 'http://res.cloudinary.com/dccshngpp/image/upload/v1488340297/g737s1kdthtohzfxj25m.jpg',
user_id: User.fourth.id
},

{
title:"Strangers",
artist: 'The Kinks',
song_url: 'http://res.cloudinary.com/dccshngpp/video/upload/v1488340146/strangers.mp3',
cover_url: 'http://res.cloudinary.com/dccshngpp/image/upload/v1488340204/qk6y3x1nfzelh02e5pfp.jpg',
user_id: User.third.id
},

{
title:"Kennel District",
artist: 'Pavement',
song_url: 'http://res.cloudinary.com/dccshngpp/video/upload/v1488341869/kenneldistrict.mp3',
cover_url: 'http://res.cloudinary.com/dccshngpp/image/upload/v1488341885/ximja9zsctd8d2ksupiq.jpg',
user_id: User.first.id
}



])
