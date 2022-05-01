grasses = ["https://images.unsplash.com/photo-1571063249898-66b9f5eb0fe1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzB8fGdyYXNzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60", "https://images.unsplash.com/photo-1558864255-eced94afc9ec?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8bGF3bnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=400&q=60", "https://images.unsplash.com/photo-1623358519330-00f61d89396b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8bGF3bnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=400&q=60", "https://images.unsplash.com/photo-1594348352429-159508d48c57?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzV8fGxhd258ZW58MHx8MHx8&auto=format&fit=crop&w=400&q=60", "https://images.unsplash.com/photo-1595077528689-db5705feeb81?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDZ8fGxhd258ZW58MHx8MHx8&auto=format&fit=crop&w=400&q=60", "https://images.unsplash.com/photo-1559702971-54d4089fc5a5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OTZ8fGxhd258ZW58MHx8MHx8&auto=format&fit=crop&w=400&q=60", "https://images.unsplash.com/photo-1571401518607-0de4a744dce2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTMyfHxsYXdufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=400&q=60", "https://images.unsplash.com/photo-1592927720494-bdcce0ccaad6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTU4fHxsYXdufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=400&q=60", "https://images.unsplash.com/photo-1523904200128-4f0fd6d026ad?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjIzfHxsYXdufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=400&q=60", "https://images.unsplash.com/photo-1618944837866-554236cae3cc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjQxfHxsYXdufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=400&q=60"]

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
      lawn_size: 1500, 
      service_type: "Mow Lawn",
      frequency: "Once",
      sdate: Faker::Date.backward(days: 14),
      stime: Faker::Time.backward(days: 5, period: :morning, format: :short),
      service_image: grasses.sample,
      complete: false,
      user_id: @user.id
    )
  end
end

puts 'data seeded'