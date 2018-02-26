# subpixelFix
Small vanilla js script that fixes blurry half pixel CSS transforms. It simply rounds transform value to full pixel. For now it fixed transformX and transformY values. 

Any feedback would be much appreciated!

## How to use
[Codepen](https://codepen.io/engray/pen/QQZZre)

![Subpixel problem explained](https://i.imgur.com/xxlTAK2.png)

Just call ```subpixelFix();```

## TODO
* add on resize callback
* check and fix all matrix values
* detect and run only when necessary (ie. chrome)
