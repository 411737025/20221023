function setup() {
	createCanvas(windowWidth, windowHeight);
	
}

function draw() {
  background(0)//背景顏色設置為0
  noFill()//畫出來的圖形不上色
  stroke(((frameCount%255)+(frameCount*3))%255,frameCount%255,frameCount*100%255);//圖形框線顏色會依照指定的規則做變換
  strokeWeight(5)//框線寬度設置為5
  rectMode(CENTER)//設定方形座標在中心點
	
for (var k=0;k<(width/150);k++){//設置k=0當k小於螢幕寬度除上50時k+1
	for (var p=0;p<(height/150);p++){//設置p=0當p小於螢幕寬度除上50時p+1
ellipse(75+(150*k),75+(150*p),150+mouseX/30,(frameCount*20)%151+mouseX/30);//畫出座標(75+(150*k),75+(150*p)大小(150+mouseX/30,(frameCount*20)%151+mouseX/30)的橢圓
ellipse(75+(150*k),75+(150*p),(frameCount*20)%151+mouseX/30,150+mouseX/30);//畫出座標(75+(150*k),75+(150*p)大小(frameCount*20)%151+mouseX/30,150+mouseX/30)的橢圓
rect(150+(150*k),150+(150*p),75+mouseX/50)//畫出座標(150+(150*k),150+(150*p)長寬為75+mouseX/50的方形
rect(75+(150*k),75+(150*p),150+mouseX/50)//畫出座標(75+(150*k),75+(150*p)長寬為150+mouseX/50的方形
}
}
}