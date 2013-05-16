image = document.getElementById 'image'
imageArrayTag = document.getElementsByTagName 'img'
imageArray = []
tracker
timer

for i in [0..imageArrayTag.length]
  imageArray.push imageArrayTag[i].src

fadeIn() ->
  if image.style.opacity >= 1
    return
  image.style.opacity = parseFloat(image.style.opacity, 10) + 0.01

next() ->
  image.style.opacity = 0
  for i in [0..imageArray.length]
    if image.src == imageArray[i]
      if image.src == imageArray[imageArray.length - 1 ]
        tracker = imageArray[0]
      else
        tracker = imageArray[i+1]
  image.src = tracker

previous() ->
  image.style.opacity = 0
  for i in [0..imageArray.length]
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

