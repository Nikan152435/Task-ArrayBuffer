export default class Character {
    constructor(type, attack) {
      if (['Daemon', 'Magician'].includes(type)) {
        this.type = type;
      } else {
        throw new Error('Character type not allowed!');
      }
      this.baseAttackPower = attack;
      this.stone = false;
      this.attackDistance = NaN;
    }
  
    set stoned(stone) {
      this.stone = stone;
    }
  
    get stoned() {
      return this.stone;
    }
  
    set distance(distance) {
      this.attackDistance = distance;
    }
  
    get distance() {
      return this.attackDistance;
    }
  
    get baseAttack() {
      return this.baseAttackPower;
    }
  // Добавление сеттера для атаки
  set attack(newAttack) {
    
    if (typeof newAttack === 'number' && newAttack >= 0) {
      this.baseAttackPower = newAttack;
    } else {
      console.error('Invalid attack value. Attack must be a non-negative number.');
    }
  }

    get attack() {
      if (Number.isNaN(this.attackDistance)) {
        return NaN;
      }
      let result = this.baseAttack * (1 - (this.attackDistance - 1) / 10);
      if (this.stoned) {
        result -= Math.log2(this.attackDistance) * 5;
      }
      return result;
    }
  }