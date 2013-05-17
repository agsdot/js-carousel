image = document.getElementById 'image'
imageArrayTag = document.getElementsByTagName('img')
imageArray = []
tracker = undefined
timer = undefined

# for i in [0..imageArrayTag.length]
#   imageArray.push imageArrayTag[i].src

# for i in [0..imageArrayTag.length] by 1
#   imageArray.push imageArrayTag[i].src

i = 0
while i < imageArrayTag.length
  imageArray.push imageArrayTag[i].src
  i += 1

fadeIn = ->
  if image.style.opacity >= 1
    return
  image.style.opacity = parseFloat(image.style.opacity, 10) + 0.01

# next() ->
next = ->
  image.style.opacity = 0
  # for i in [0..imageArray.length]
  for i in [0..imageArray.length] by 1

    if image.src == imageArray[i]
      if image.src == imageArray[imageArray.length - 1 ]
        tracker = imageArray[0]
      else
        tracker = imageArray[i+1]
  image.src = tracker

# previous() ->

previous = ->
  image.style.opacity = 0
  # for i in [0..imageArray.length]
  for i in [0..imageArray.length] by 1
    if image.src == imageArray[0]
      if image.src == imageArray[0]
        tracker = imageArray[imageArray.length -1]
      else
        tracker = imageArray[i-1]
  image.src = tracker

a = document.getElementById 'next'
b = document.getElementById 'previous'


a.onclick = ->
  clearInterval timer
  timer = setInterval fadeIn, 10
  next()

b.onclick = ->
  clearInterval timer
  timer = setInterval fadeIn, 10
  previous()



# http://discontinuously.com/2012/05/iteration-in-coffeescript/