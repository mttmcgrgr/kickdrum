# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

# User.create!([ { username: 'Guest', password: '12345678'} ])




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
  }
  ])
