

i = 1

5.times do
  @user = User.create(
    email: "test#{i}@email.com",
    password: 'password',
    fname: "test#{i}",
    lname: "testing#{i}",
    phone: '666-666-6666',
    role: "Lawn Mower",
    image: "https://images.unsplash.com/photo-1587331722574-acf78f587c4e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y2xvd258ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
  )
  i += 1

  10.times do
    Service.create(
      lawn_size: "1500 sqft", 
      service_type: "Mow Lawn",
      frequency: "Once",
      sdate: Faker::Date.backward(days: 14),
      stime: Faker::Time.backward(days: 5, period: :morning, format: :short),
      service_image: "https://images.unsplash.com/photo-1559792368-08e1355c7b7d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80",
      complete: false,
      user_id: @user.id
    )
  end
end

puts 'data seeded'