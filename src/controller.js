import "./main.css";

class VirtualBoy {
  constructor() {
    this.testStr = "hello from lib";
    
    // this.dom = {
    //   joystick: null,
    //   buttonPad: null
    // };
    this.thumbstickDown = false;
  }

  log() {
    console.log(this.testStr);
  }

  createJoystick() {
    const joystick = document.createElement('div');
    joystick.setAttribute('data-vbjoystick', true);

    const thumbstick = document.createElement('div');
    thumbstick.setAttribute('data-vbthumbstick', true);

    joystick.appendChild(thumbstick);
    
    return joystick;
  }

  createButtonPad() {
    const pad = document.createElement('div');
    pad.setAttribute('data-vbbtnpad', true);

    const aBtn = document.createElement('div');
    aBtn.setAttribute('data-vbabtn', true);
    aBtn.innerHTML = 'A';

    const bBtn = document.createElement('div');
    bBtn.setAttribute('data-vbbbtn', true);
    bBtn.innerHTML = 'B';

    pad.appendChild(aBtn);
    pad.appendChild(bBtn);

    return pad;
  }

  bindUI(joystick = null, buttonPad = null, startSelect = null, menuTray = null) {

    window.virtualboy = {
      ui: {
        joystick: {
          isDown: false,
          xAxis: 0,
          yAxis: 0
        },
        aBtn: {
          isDown: false
        },
        bBtn: {
          isDown: false
        }
      }
    };

    if (joystick) {
      document.body.appendChild(joystick);
    }

    if (buttonPad) {
      document.body.appendChild(buttonPad);
    }

    // Bind events
    if (joystick) {
      const thumbstick = joystick.querySelector('[data-vbthumbstick]');

      thumbstick.addEventListener('pointerdown', (e) => {
        window.virtualboy.ui.joystick.isDown = true;

        this.thumbstickDown = true;
        console.log('down');
      });

      thumbstick.addEventListener('pointermove', (e) => {
        if (window.virtualboy.ui.joystick.isDown) {
          const bounds = joystick.getBoundingClientRect();
          const {x: bx, y: by, width, height} = bounds;
          const {clientX: cx, clientY: cy} = e;

          const x = (cx - bx);
          const y = (cy - by);

          window.virtualboy.ui.joystick.xAxis = Math.min(Math.max(((x / width) * 2 - 1), -1), 1);
          window.virtualboy.ui.joystick.yAxis = Math.min(Math.max(((y / height) * 2 - 1), -1), 1);

          if (x > 0 && x < width) {
            thumbstick.style.left = `${x}px`;
          }
          if (y > 0 && y < height) {
            thumbstick.style.top = `${y}px`;
          }
          console.log('move');
        }
      });

      thumbstick.addEventListener('pointerup', () => {
        window.virtualboy.ui.joystick.isDown = false;

        let width = null;
        let height = null;

        try {
          width = window.getComputedStyle(joystick, null).getPropertyValue('width');
          height = window.getComputedStyle(joystick, null).getPropertyValue('height');
        } catch(e) {
          width = joystick.currentStyle.width;
          height = joystick.currentStyle.height;
        }

        width = parseInt(width.replace('px', ''), 10);
        height = parseInt(height.replace('px', ''), 10);

        const x = (width / 2);
        const y = (height / 2);

        thumbstick.style.left = `${x}px`;
        thumbstick.style.top = `${y}px`;
      });

      thumbstick.addEventListener('pointercancel', () => {
        window.virtualboy.ui.joystick.isDown = false;
        console.log('cancel');
      });
    }

    if (buttonPad) {
      const aBtn = buttonPad.querySelector('[data-vbabtn]');
      const bBtn = buttonPad.querySelector('[data-vbbbtn]');

      aBtn.addEventListener('pointerdown', () => {
        window.virtualboy.ui.aBtn.isDown = true;
      });

      aBtn.addEventListener('pointerup', () => {
        window.virtualboy.ui.aBtn.isDown = false;
      });

      aBtn.addEventListener('pointercancel', () => {
        window.virtualboy.ui.aBtn.isDown = false;
      });

      bBtn.addEventListener('pointerdown', () => {
        window.virtualboy.ui.bBtn.isDown = true;
      });

      bBtn.addEventListener('pointerup', () => {
        window.virtualboy.ui.bBtn.isDown = false;
      });

      bBtn.addEventListener('pointercancel', () => {
        window.virtualboy.ui.bBtn.isDown = false;
      });
    }

  }
}

export default VirtualBoy;