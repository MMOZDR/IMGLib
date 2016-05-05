


function skalaszarosci(imgObj) {
    var canvas = document.createElement('canvas');
    var canvasContext = canvas.getContext('2d');
    
    var imgW = imgObj.width;
    var imgH = imgObj.height;
    canvas.width = imgW;
    canvas.height = imgH;
    
    canvasContext.drawImage(imgObj, 0, 0);
    var imgPixels = canvasContext.getImageData(0, 0, imgW, imgH);
    
    for(var y = 0; y < imgPixels.height; y++){
        for(var x = 0; x < imgPixels.width; x++){
            var i = (y * 4) * imgPixels.width + x * 4;
            var avg = imgPixels.data[i]*0.2126 + imgPixels.data[i + 1]*0.7152 + imgPixels.data[i + 2]*0.0722;
            imgPixels.data[i] = avg; 
            imgPixels.data[i + 1] = avg; 
            imgPixels.data[i + 2] = avg;
        }
    }
    canvasContext.putImageData(imgPixels, 0, 0, 0, 0, imgPixels.width, imgPixels.height);
    return canvas.toDataURL();
}


function lomo(imgObj) {
    var canvas = document.createElement('canvas');
    var canvasContext = canvas.getContext('2d');
    
    var imgW = imgObj.width;
    var imgH = imgObj.height;
    canvas.width = imgW;
    canvas.height = imgH;
    
    canvasContext.drawImage(imgObj, 0, 0);
    var imgPixels = canvasContext.getImageData(0, 0, imgW, imgH);
    
    for(var y = 0; y < imgPixels.height; y++){
        for(var x = 0; x < imgPixels.width; x++){
            var i = (y * 4) * imgPixels.width + x * 4;
            imgPixels.data[i] = imgPixels.data[i]+40; 
            imgPixels.data[i + 1] = imgPixels.data[i + 1]+10; 
            imgPixels.data[i + 2] = imgPixels.data[i + 2]+140;
        }
    }
    canvasContext.putImageData(imgPixels, 0, 0, 0, 0, imgPixels.width, imgPixels.height);
    return canvas.toDataURL();
}


function niebieski(imgObj) {
    var canvas = document.createElement('canvas');
    var canvasContext = canvas.getContext('2d');
    
    var imgW = imgObj.width;
    var imgH = imgObj.height;
    canvas.width = imgW;
    canvas.height = imgH;
    
    canvasContext.drawImage(imgObj, 0, 0);
    var imgPixels = canvasContext.getImageData(0, 0, imgW, imgH);
    
    for(var y = 0; y < imgPixels.height; y++){
        for(var x = 0; x < imgPixels.width; x++){
            var i = (y * 4) * imgPixels.width + x * 4;
            imgPixels.data[i + 2] = 255; 
        }
    }
    canvasContext.putImageData(imgPixels, 0, 0, 0, 0, imgPixels.width, imgPixels.height);
    return canvas.toDataURL();
}

function zielony(imgObj) {
    var canvas = document.createElement('canvas');
    var canvasContext = canvas.getContext('2d');
    
    var imgW = imgObj.width;
    var imgH = imgObj.height;
    canvas.width = imgW;
    canvas.height = imgH;
    
    canvasContext.drawImage(imgObj, 0, 0);
    var imgPixels = canvasContext.getImageData(0, 0, imgW, imgH);
    
    for(var y = 0; y < imgPixels.height; y++){
        for(var x = 0; x < imgPixels.width; x++){
            var i = (y * 4) * imgPixels.width + x * 4;
           imgPixels.data[i + 1] =255; 
        }
    }
    canvasContext.putImageData(imgPixels, 0, 0, 0, 0, imgPixels.width, imgPixels.height);
    return canvas.toDataURL();
}
function czerwony(imgObj) {
    var canvas = document.createElement('canvas');
    var canvasContext = canvas.getContext('2d');
    
    var imgW = imgObj.width;
    var imgH = imgObj.height;
    canvas.width = imgW;
    canvas.height = imgH;
    
    canvasContext.drawImage(imgObj, 0, 0);
    var imgPixels = canvasContext.getImageData(0, 0, imgW, imgH);
    
    for(var y = 0; y < imgPixels.height; y++){
        for(var x = 0; x < imgPixels.width; x++){
            var i = (y * 4) * imgPixels.width + x * 4;
            imgPixels.data[i] = 255; 
        }
    }
    canvasContext.putImageData(imgPixels, 0, 0, 0, 0, imgPixels.width, imgPixels.height);
    return canvas.toDataURL();
}
function sepia(imgObj) {
    var canvas = document.createElement('canvas');
    var canvasContext = canvas.getContext('2d');
    
    var imgW = imgObj.width;
    var imgH = imgObj.height;
    canvas.width = imgW;
    canvas.height = imgH;
    var wsp=30;
    canvasContext.drawImage(imgObj, 0, 0);
    var imgPixels = canvasContext.getImageData(0, 0, imgW, imgH);
    
    for(var y = 0; y < imgPixels.height; y++){
        for(var x = 0; x < imgPixels.width; x++){
            var i = (y * 4) * imgPixels.width + x * 4;
            var avg = imgPixels.data[i]*0.2126 + imgPixels.data[i + 1]*0.7152 + imgPixels.data[i + 2]*0.0722;
            imgPixels.data[i] = avg; 
            imgPixels.data[i + 1] = avg; 
            imgPixels.data[i + 2] = avg;
        }
    }

    for(var y = 0; y < imgPixels.height; y++){
        for(var x = 0; x < imgPixels.width; x++){
            var i = (y * 4) * imgPixels.width + x * 4;
            imgPixels.data[i] = imgPixels.data[i]+2*wsp; 
            imgPixels.data[i + 1] = imgPixels.data[i + 1]+wsp; 
            imgPixels.data[i + 2] = imgPixels.data[i + 2];
        }
    }
    canvasContext.putImageData(imgPixels, 0, 0, 0, 0, imgPixels.width, imgPixels.height);
    return canvas.toDataURL();
}



function progowanie(imgObj) {
    var canvas = document.createElement('canvas');
    var canvasContext = canvas.getContext('2d');
    
    var imgW = imgObj.width;
    var imgH = imgObj.height;
    canvas.width = imgW;
    canvas.height = imgH;

    canvasContext.drawImage(imgObj, 0, 0);
    var imgPixels = canvasContext.getImageData(0, 0, imgW, imgH);
    var threshold=150;
    for(var y = 0; y < imgPixels.height; y++){
        for(var x = 0; x < imgPixels.width; x++){
            var i = (y * 4) * imgPixels.width + x * 4;
            var avg = (imgPixels.data[i]*0.2126 + imgPixels.data[i + 1]*0.7152 + imgPixels.data[i + 2]*0.0722 >= threshold) ? 255 : 0;
            imgPixels.data[i] = avg; 
            imgPixels.data[i + 1] = avg; 
            imgPixels.data[i + 2] = avg;
        }
    }
    canvasContext.putImageData(imgPixels, 0, 0, 0, 0, imgPixels.width, imgPixels.height);
    return canvas.toDataURL();
}

function solaryzacja(imgObj) {
    var canvas = document.createElement('canvas');
    var canvasContext = canvas.getContext('2d');
    
    var imgW = imgObj.width;
    var imgH = imgObj.height;
    canvas.width = imgW;
    canvas.height = imgH;

    canvasContext.drawImage(imgObj, 0, 0);
    var imgPixels = canvasContext.getImageData(0, 0, imgW, imgH);
    var prog=123;
    for(var y = 0; y < imgPixels.height; y++){
        for(var x = 0; x < imgPixels.width; x++){
            var i = (y * 4) * imgPixels.width + x * 4;
            if(imgPixels.data[i]>=prog){
            imgPixels.data[i] = 255-imgPixels.data[i];}
            if(imgPixels.data[i + 1]>=prog){
            imgPixels.data[i + 1] =255-imgPixels.data[i + 1]; }
            if(imgPixels.data[i + 2]>=prog){
            imgPixels.data[i + 2] = 255-imgPixels.data[i + 2];
        }
            }
    }
    canvasContext.putImageData(imgPixels, 0, 0, 0, 0, imgPixels.width, imgPixels.height);
    return canvas.toDataURL();
}


function inwersja(imgObj) {
    var canvas = document.createElement('canvas');
    var canvasContext = canvas.getContext('2d');
    
    var imgW = imgObj.width;
    var imgH = imgObj.height;
    canvas.width = imgW;
    canvas.height = imgH;

    canvasContext.drawImage(imgObj, 0, 0);
    var imgPixels = canvasContext.getImageData(0, 0, imgW, imgH);
    for(var y = 0; y < imgPixels.height; y++){
        for(var x = 0; x < imgPixels.width; x++){
            var i = (y * 4) * imgPixels.width + x * 4;
            imgPixels.data[i] = 255-imgPixels.data[i]; 
            imgPixels.data[i + 1] = 255-imgPixels.data[i + 1]; 
            imgPixels.data[i + 2] = 255-imgPixels.data[i + 2];
        }
    }
    canvasContext.putImageData(imgPixels, 0, 0, 0, 0, imgPixels.width, imgPixels.height);
    return canvas.toDataURL();
}

function jasnosc(imgObj) {
    var canvas = document.createElement('canvas');
    var canvasContext = canvas.getContext('2d');
    
    var imgW = imgObj.width;
    var imgH = imgObj.height;
    canvas.width = imgW;
    canvas.height = imgH;

    canvasContext.drawImage(imgObj, 0, 0);
    var imgPixels = canvasContext.getImageData(0, 0, imgW, imgH);
    var threshold=150;
    var br=0;
    var bg=0;
    var bb=0;
    for(var y = 0; y < imgPixels.height; y++){
        for(var x = 0; x < imgPixels.width; x++){
            var i = (y * 4) * imgPixels.width + x * 4;
            var avg = (imgPixels.data[i]*0.2126 + imgPixels.data[i + 1]*0.7152 + imgPixels.data[i + 2]*0.0722 >= threshold) ? 255 : 0;
            br=br+imgPixels.data[i]; 
            bg=bg+imgPixels.data[i + 1]; 
            bb=bb+imgPixels.data[i + 2];
        }
    }
    br=br/i;
    bg=bg/i+1;
    bb=bb/i+2;
     //document.write("Jasność: R:"+br+" G:"+bg+" B:"+bb+" .")
    for(var y = 0; y < imgPixels.height; y++){
        for(var x = 0; x < imgPixels.width; x++){
            var i = (y * 4) * imgPixels.width + x * 4;
            var avg = (imgPixels.data[i]*0.2126 + imgPixels.data[i + 1]*0.7152 + imgPixels.data[i + 2]*0.0722 >= threshold) ? 255 : 0;
            imgPixels.data[i] = br + imgPixels.data[i]; 
            imgPixels.data[i + 1] = bg + imgPixels.data[i + 1]; 
            imgPixels.data[i + 2] = bb + imgPixels.data[i + 2];
        }
    }

    canvasContext.putImageData(imgPixels, 0, 0, 0, 0, imgPixels.width, imgPixels.height);
    return canvas.toDataURL();
}

function sincity(imgObj) {
    var canvas = document.createElement('canvas');
    var canvasContext = canvas.getContext('2d');
    
    var imgW = imgObj.width;
    var imgH = imgObj.height;
    canvas.width = imgW;
    canvas.height = imgH;
    
    canvasContext.drawImage(imgObj, 0, 0);
    var imgPixels = canvasContext.getImageData(0, 0, imgW, imgH);
    
    for(var y = 0; y < imgPixels.height; y++){
        for(var x = 0; x < imgPixels.width; x++){
            var i = (y * 4) * imgPixels.width + x * 4;
            if(imgPixels.data[i]<80||imgPixels.data[i + 1]>80||imgPixels.data[i + 2] >100){
            var avg = imgPixels.data[i]*0.3 + imgPixels.data[i + 1]*0.59 + imgPixels.data[i + 2]*0.11;
            imgPixels.data[i] = avg; 
            imgPixels.data[i + 1] = avg;
            imgPixels.data[i + 2] = avg;
            }

        }
    }
    canvasContext.putImageData(imgPixels, 0, 0, 0, 0, imgPixels.width, imgPixels.height);
    return canvas.toDataURL();
}

function rotacja(imgObj,N) {
    var canvas = document.createElement('canvas');
    var canvasContext = canvas.getContext('2d');
    
    var imgW = imgObj.width;
    var imgH = imgObj.height;
    canvas.width = imgW;
    canvas.height = imgH;
    canvasContext.translate(imgW/2,imgH/2);
    canvasContext.rotate(N*Math.PI/180);
    
    canvasContext.drawImage(imgObj, -imgW/2,-imgH/2);
    return canvas.toDataURL();
}
