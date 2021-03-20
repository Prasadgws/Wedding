console.log("SW file pulic Folder");

let cacheData = "appV1";


this.addEventListener('install', (event) => {
  
    event.waitUntil(
        caches.open(cacheData).then((cache)=>{
            cache.addAll([
                "/static/media/b4.78ba6f83.jpg",
                "/src/css/bootstrap/css/bootstrap.min.css",
                "/static/js/bundle.js",
                "/api/productList",
                "/static/media/laptop.324ccc02.jpeg",
                "/sockjs-node/info?t=1603870493486",
                "image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAAhQAAAIUB4uz/wQAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAIQSURBVEiJtZO7axRRGMV/38yyOySCD4gkIlpJwFikUXzksWujRSwEsREDloYUavIPWFmkFGxSGLEUrBSx0M2a2Ak2KlhoI8RICApmZWd3M8di1zDMzGZnNB4YmHvuPed8331ABmixcEFLhYksGktt/sobRyq3VFaysVoljc5JXYp0q12QId1MK0vVgV54h8npE+C2qQDHjtho7XM3bboOcpoOmbd0ga6nkXbtQG/ooep9Ae2LTP2g5h+0c1S303fvoFq4mmAOsAfPu9JNntiBlthLkO8Hpw/pHsZQolq8x2wKgjWc+qqN8j0WoMX8RcyugfWDBoA+oNCtsg7wgTWwr6BVpPumirfeYQt2AFp3MC38H3PA7IFjY/4McAPQDloL7LaN+TNbh6yKNwmaB/L/aN5ENmXF2jxEbpEq3lnQY2D3X5pvIC5b0X/2h4hdU5Xzx3DsKXAoo/kKBBM23ngbJmMPzUr1dxhzGc3BuBM1TwxoQScyB0jHk+gOAXY6c0AHTfwMXu/aT7PxLXsAEOQGrFRdDVPxDjbr21W/0f6S4TZORql4gOxMolg8wXWGcN1BTA9JephBfJtyCVanIuMPyKatWCuHuElVvAXQXeDoFmvEAhIO2bz2z09gll5/OGLeWjVee0mvPwzMtteGtaHMCLRcGGST87juIxv5tRIvIA4t9xyguXmJHM9txP8YnvsNJlihJu4K2ugAAAAASUVORK5CYII=",
                "image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAAyAAAAMgBFP3XOwAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAGBSURBVEiJtdU9TxVBFAbgZy+onbEwoSGh0MKEwtCYoL+C0kJDQqH/wAiFHT+CUEhDQkuBnRgLWr9CAaFCKmMkmNDAxWOxe+Pe3dkr3L28ySSz58y+75yPmYEFdBHF+IXHEWEUYxx7+IBx3MQs5rFjFCir4QbOsDOqCDoVsXPsY3oku5enpYpdTGdZ9hTHLbgv8LFJANZbkPew1EkYdxO2YfGlVhQ88K9l24xDdFIRHMg7qS1WI+JPsrXwteXuu5istWkJbeuwFRFHuDaBld7kOgSO8K73kToHZYGfVxTrYjkiLnqGrChqH7IsG8MpPkXE7BUE6lwpgULkM+5jdUjuLlYab0Esan/YXjVGUERxT36FDxVBRBwMFChEHuEZ3mOzXMDCP4kX8oZ4GxEnfQSDHgu80R/ydsX/BOcl/2/c7VszgPwWfqjndaa0ZiPhf934olVwG3cS9qmGedr2nxStV3b3HWMl//NEBA8vlaKCYALLBfFa7ee8w17iG7YxV+X4C2NZ4WJRwGQuAAAAAElFTkSuQmCC",
                "index.html",
                "/",
               

            ])
        })
    )
  });


  this.addEventListener('fetch', (event) => {
  if(!navigator.onLine)
  {
    event.respondWith(
        caches.match(event.request).then((result)=>{
            
            if(result)
            {
                return result
            }
            let requestUrl = event.request.clone();
            return fetch(requestUrl)
        })
    )
  }


  });