/* Закрытие формы регистрации */
function closeForm(){
  const closeForm = document.querySelector('.form');
  closeForm.style.display = 'none';
}
/* Запуск видео */
function toggle(){
  const trailer = document.querySelector('.video__trailer');
  trailer.classList.toggle('active')
}
/* Закрытие окошка с видео */
function close(){
  const close = document.querySelector('.close_tr');
  close.classList.add('close')
}
/* Смена персонажей слайдера */
const slider = document.querySelector('.slider__container');
function lleyn(){
  slider.innerHTML = ''
  slider.innerHTML = `<li class="slider__element3">
                <div class="slider__slide3">
                  <div class="slider__main--text">
                    <img src="./assets/2_CHARS/2_CHARS_head.png" alt="">
                  </div>
                  <div class="slider__main--content">
                    <div class="slider__left--side">
                      <div class="left__side--title">
                        <img class="left__title--image" src="./assets/2_CHARS/2_CHARS_name_Lleyn.png" alt="">
                      </div>
                      <div class="left__side--fraction">
                        <img src="./assets/2_CHARS/2_CHARS_fraction_Lleyn.png" alt="">
                        <div class="slider__fraction--lleyn">Цитадель небожителей</div>
                      </div>
                      <div class="left__side--text">
                        Зверолюд Ллейн выбрал кровавый путь наёмного убийцы в тайной организации "Покров". Его прозвали "Дикий клинок" из-за жестокости и скорости.
                      </div>
                      <div class="left__side--skills">
                        <div class="skill">
                          <img src="./assets/2_CHARS/2_CHARS_skill_Lleyn_1.png" alt="">
                          <div class="skill__info">
                            <div class="skill__title">Дикий разрез</div>
                            <div class="skill__description">Превращает 30% нанесенного урона в ОЗ.</div>
                          </div>
                        </div>
                        <div class="skill">
                          <img src="./assets/2_CHARS/2_CHARS_skill_Lleyn_2.png" alt="">
                          <div class="skill__info">
                            <div class="skill__title">Найти и уничтожить</div>
                            <div class="skill__description">Наносит 313% урона врагу.</div>
                          </div>
                        </div>
                      </div>
                    </div>
                
                    <div class="slider__right--side">
                      <div class="slide__form1">
                        <label for="icon__item">
                          <div class="icon__image--form1" onclick="isolda()"></div>
                        </label>
                        <input class="input__icon" type="radio" name="icon__item" id="icon__item">
                      </div>
                      <div class="slide__form1">
                        <label for="icon__item">
                          <div class="icon__image--form2" onclick="pamela()"></div>
                        </label>
                        <input class="input__icon" type="radio" name="icon__item" id="icon__item">
                      </div>
                      <div class="slide__form1">
                        <label for="icon__item">
                          <div class="icon__image--form3  active3" onclick="lleyn()"></div>
                        </label>
                        <input class="input__icon" type="radio" name="icon__item" id="icon__item">
                      </div>
                    </div>
                  </div>
                  <div class="slider__main--semi-text">
                    60 наемников с неповторимой историей и сотни возможностей для построения команды ждут тебя! Система связей между персонажами - важная часть игрового сюжета и
                    тонкий механизм настройки боевого отряда. Выбери свою фракцию и получай бонусы к мощи.
                  </div>
                  <div class="slider__main--arrow">
                    <a href="#video">
                      <div class="slider__main--arrow-active">
                      </div>
                    </a>
                  </div>
                </div>
              </li>`
}

function isolda(){
  slider.innerHTML = ''
  slider.innerHTML = `<li class="slider__element1">
                <div class="slider__slide1">
                  <div class="slider__main--text">
                    <img src="./assets/2_CHARS/2_CHARS_head.png" alt="">
                  </div>
                  <div class="slider__main--content">
                    <div class="slider__left--side">
                      <div class="left__side--title">
                        <img class="left__title--image" src="./assets/2_CHARS/2_CHARS_name_Isolda.png" alt="">
                      </div>
                      <div class="left__side--fraction">
                        <img src="./assets/2_CHARS/2_CHARS_fraction_Isolda.png" alt="">
                        <div class="slider__fraction--immortal">Империя бессмертных</div>
                      </div>
                      <div class="left__side--text">
                        Появление королевы холода и её верного медведя предвещает ледяная буря. Неуязвимая Изольда замораживает противников насмерть и не знает пощады.
                      </div>
                      <div class="left__side--skills">
                        <div class="skill">
                          <img src="./assets/2_CHARS/2_CHARS_skill_Isolda_1.png" alt="">
                          <div class="skill__info">
                            <div class="skill__title">
                              Конец зимы
                            </div>
                            <div class="skill__description">360% урона авангарду врага</div>
                          </div>
                        </div>
                        <div class="skill">
                          <img src="./assets/2_CHARS/2_CHARS_skill_Isolda_2.png" alt="">
                          <div class="skill__info">
                            <div class="skill__title">Морозная ария</div>
                            <div class="skill__description">Ледяной щит уменьшает получаемый урон на 20%</div>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div class="slider__right--side">
                      <div class="slide__form1">
                        <label for="icon__item">
                          <div class="icon__image--form1 active1" onclick="isolda()"></div>
                        </label>
                        <input class="input__icon" type="radio" name="icon__item" id="icon__item">
                      </div>
                      <div class="slide__form1">
                        <label for="icon__item">
                          <div class="icon__image--form2" onclick="pamela()"></div>
                        </label>
                        <input class="input__icon" type="radio" name="icon__item" id="icon__item">
                      </div>
                      <div class="slide__form1">
                        <label for="icon__item">
                          <div class="icon__image--form3" onclick="lleyn()"></div>
                        </label>
                        <input class="input__icon" type="radio" name="icon__item" id="icon__item">
                      </div>
                    </div>
                  </div>
                  <div class="slider__main--semi-text">
                    60 наемников с неповторимой историей и сотни возможностей для построения команды ждут тебя! Система связей между персонажами - важная часть игрового сюжета и
                    тонкий механизм настройки боевого отряда. Выбери свою фракцию и получай бонусы к мощи.
                  </div>
                  <div class="slider__main--arrow">
                    <a href="#video">
                      <div class="slider__main--arrow-active">
                      </div>
                    </a>
                  </div>
                </div>
              </li>`
}

function pamela(){
  slider.innerHTML = ''
  slider.innerHTML = `<li class="slider__element2">
                <div class="slider__slide2">
                  <div class="slider__main--text">
                    <img src="./assets/2_CHARS/2_CHARS_head.png" alt="">
                  </div>
                  <div class="slider__main--content">
                    <div class="slider__left--side">
                      <div class="left__side--title">
                        <img class="left__title--image" src="./assets/2_CHARS/2_CHARS_name_Pamela.png" alt="">
                      </div>
                      <div class="left__side--fraction">
                        <img src="./assets/2_CHARS/2_CHARS_fraction_Pamela.png" alt="">
                        <div class="slider__fraction--illuminate">Союз просвященных</div>
                      </div>
                      <div class="left__side--text">
                        Памела - супруга древнего огненного дракона, одна из первых овладела магией. Никто не знает, на чьей стороне она сражается на самом деле
                      </div>
                      <div class="left__side--skills">
                        <div class="skill">
                          <img src="./assets/2_CHARS/2_CHARS_skill_Pamela_1.png" alt="">
                          <div class="skill__info">
                            <div class="skill__title">Чёрное дыхание</div>
                            <div class="skill__description">Наносит врагу с мин. ОЗ 426% урона</div>
                          </div>
                        </div>
                        <div class="skill">
                          <img src="./assets/2_CHARS/2_CHARS_skill_Pamela_2.png" alt="">
                          <div class="skill__info">
                            <div class="skill__title">Проклятие дракона</div>
                            <div class="skill__description">Проклинает всех врагов, снижая урон на 15%</div>
                          </div>
                        </div>
                      </div>
                    </div>
                
                    <div class="slider__right--side">
                      <div class="slide__form1">
                        <label for="icon__item">
                          <div class="icon__image--form1" onclick="isolda()"></div>
                        </label>
                        <input class="input__icon" type="radio" name="icon__item" id="icon__item">
                      </div>
                      <div class="slide__form1">
                        <label for="icon__item">
                          <div class="icon__image--form2 active2" onclick="pamela()"></div>
                        </label>
                        <input class="input__icon" type="radio" name="icon__item" id="icon__item">
                      </div>
                      <div class="slide__form1">
                        <label for="icon__item">
                          <div class="icon__image--form3" onclick="lleyn()"></div>
                        </label>
                        <input class="input__icon" type="radio" name="icon__item" id="icon__item">
                      </div>
                    </div>
                  </div>
                  <div class="slider__main--semi-text">
                    60 наемников с неповторимой историей и сотни возможностей для построения команды ждут тебя! Система связей между персонажами - важная часть игрового сюжета и
                    тонкий механизм настройки боевого отряда. Выбери свою фракцию и получай бонусы к мощи.
                  </div>
                  <div class="slider__main--arrow">
                    <a href="#video">
                      <div class="slider__main--arrow-active">
                      </div>
                    </a>
                  </div>
                </div>
              </li>`
}