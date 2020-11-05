function Background () {
      backgroundEl = document.getElementById("canvas");
    
      const ctx = backgroundEl.getContext('2d');
  
      ctx.rect(0, 0, backgroundEl.width, backgroundEl.height);
      const grd = ctx.createLinearGradient(0, 0, backgroundEl.width, backgroundEl.height);
      grd.addColorStop(0, '#8ED6FF');
      grd.addColorStop(1, '#004CB3');
      ctx.fillStyle = grd;
      ctx.fill();
  
      ctx.beginPath();
      ctx.arc(300, 250, 150, 0, Math.PI * 2, false);
      ctx.strokeStyle = "lightgrey"
      ctx.stroke();
}

module.exports = Background;