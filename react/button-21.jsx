export default () => (
  <>
    <button class="btn-21"><span>Button</span></button>

    <style jsx>{`
      .btn-21 {
        all: unset;
        text-align: center;
        curosr: default;
        font-family: sans-serif;
        font-weight: 900;
        box-sizing: border-box;
        padding: 25px 50px;
        width: auto !important;
        height: auto !important;
      }
      .btn-21 {
  display: block;
  width: 100%;
  height: 80px;
  margin: 1rem auto;
  max-width: 250px;
  border-radius: 999px;

  position: relative;
  overflow: hidden;

  text-transform: uppercase;
  border: 1px solid currentColor;
}

.btn-21 span {
  font-weight: 900;
  mix-blend-mode: difference;
}

.btn-21:before {
  content: "";
  width: 100%;
  height: 100%;

  position: absolute;
  top: 0;
  left: -100%;

  background: white;
  animation: move-out 0.3s;
  will-change: transform;
}
.btn-21:hover:before {
  animation: move-in 0.3s forwards;
}
@keyframes move-in {
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(100%);
  }
}
@keyframes move-out {
  from {
    transform: translateX(100%);
  }
  to {
    transform: translateX(200%);
  }
}

    `}</style>
  </>
)