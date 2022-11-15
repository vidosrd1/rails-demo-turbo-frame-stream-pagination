# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

Article.destroy_all
100.times do 
  Article.create(
    title: Faker::Book.title, 
    body: Faker::Lorem.paragraph_by_chars(number: 256),
    cover_url: "https://source.unsplash.com/random/800x800?sig=#{rand(1..10000)}"
  )
end

puts "👉 #{Article.count} articles created!"