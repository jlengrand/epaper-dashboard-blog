# A personal epaper dashboard powered by a raspberry.

[You can read about the complete story and setup here](https://lengrand.fr/complete-setup-epaper/)

This is how it looks like :

![personal dashboard photo](/doc/image-21.png)


You can view the web version [here](https://epaper-dashboard-blog.netlify.app/)
]
To get started fast : 

## Materials :

* [A waveshare 7.5 inch screen (with UAT)](https://www.waveshare.com/7.5inch-e-paper.htm)
* [A raspberry Pi zero](https://www.raspberrypi.org/products/raspberry-pi-zero/)
* [A bunch of soldering wires](https://www.amazon.com/TUOFENG-Wire-Solid-different-colored-spools/dp/B07TX6BX47/ref=sr_1_34?dchild=1&keywords=Soldering+Wire&qid=1614031046&sr=8-34)
* [Some lego :)](https://www.amazon.de/Lego-10698-Classic-Gro%C3%9Fe-Bausteine-Box/dp/B00PY3EYQO/ref=sxin_9_ac_d_rm?__mk_de_DE=%C3%85M%C3%85%C5%BD%C3%95%C3%91&ac_md=2-2-bGVnbyBzdGVpbmU%3D-ac_d_rm&cv_ct_cx=lego&dchild=1&keywords=lego&pd_rd_i=B00PY3EYQO&pd_rd_r=5eae0c54-ccbb-4a6f-9244-769b32337e2a&pd_rd_w=XXCMe&pd_rd_wg=iso2P&pf_rd_p=54ea5632-6b46-46db-836f-bc13df6ca6a4&pf_rd_r=G3WK7JTERFGJYNVQRKGG&psc=1&qid=1614031248&sr=1-3-fe323411-17bb-433b-b2f8-c44f2e1370d4)

## Running the backend.

Built on top of [epaper.js](https://github.com/samsonmking/epaper.js)

On the raspberry, [after having followed the instructions](https://www.waveshare.com/wiki/7.5inch_e-Paper_HAT) and installing node.

```bash
$ npm install; node index.js
```

## Running the frontend.

On your local computer

```bash
$ cd epaper-ui
$ npm install; npm start
```

## Update the dashboard for the raspberry:

On the root folder of the project

```bash
$ npm run build
```

Then push the latest version to Github, and pull on the raspberry.

# Author

* [jlengrand](http://twitch.com/jlengrand)

