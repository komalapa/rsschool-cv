---
Kuzmenko Alice - CV
---
# Kuzmenko Alice (Кузьменко Алиса)

### Contacts
- email: komalapa@gmail.com
- telegram: @komalapa

### About
I worked as technical support engineer for a long time. But now I want to change my profession. Now I don't work by personal reasons and spend free time learning Frontend development.
I hope that I will be able to find a job in the Frontend development this year.

### Work experience
- Technical support 
- Cources
    - GeekBrains, Frontend-разработчик

### Education and qualifications
- Security of automated systems (SSAU, 2013)
- GeekBrains, Frontend-разработчик (GeekBrains, 2020)
- KL-002.10 "Kaspersky Endpoint Security and Management. Базовый курс" (Softline, 2014)
- Погружение в Python (Coursera, 2018)

### Languages
- Russian - native
- English - B1

### Code examples
1. Codewars: sum long numbers
    

    const toDigits = (str, length) => ('0'.repeat(length - str.length) + str).split('').map(n => +n);
    
    function sumStrings(a,b) { 
      let sumArr = toDigits('',a.length>b.length ? a.length+1 : b.length+1);
      const aArr = toDigits(a, sumArr.length);
      const bArr = toDigits(b, sumArr.length);
      
      for (let i=1; i<sumArr.length; i++){
        sumArr[sumArr.length -i] = sumArr[sumArr.length -i] + aArr[aArr.length -i] + bArr[bArr.length -i];
        if (sumArr[sumArr.length -i] > 9){
          sumArr[sumArr.length -i] -= 10;
          sumArr[sumArr.length -i -1] = 1 + sumArr[sumArr.length -i -1] ;
        }
      }
      
      const sum = sumArr.join('').replace(/^0+/, '');;
      
      return sum
    }

2. Codewars: formatting date


    const format = n => n < 10 ? "0"+ n : n
    
    function humanReadable(seconds) {
      const h = Math.floor(seconds/3600);
      const m = Math.floor(seconds/60)%60;
      const s = seconds%60;
      return `${format(h)}:${format(m)}:${format(s)}`
    }