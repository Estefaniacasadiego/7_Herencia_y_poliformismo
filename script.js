class FigurasGeometricas {
area(){
}

perimetro(){
}

}
//primero empezamos a llamar al padre figurasgeometricas y las hijas con el contructor en este caso las figuras cuadrado, circulo y rectangulo.
class Cuadrado extends FigurasGeometricas{
    constructor(lados){
        super();
        this.lados=lados;
    }
// en este moment  ya se tienen los padres y los hijos, ahora debemos calcular el area y el perimetro y luego copiar y pegar para cada figura.     
//La formula que utilice para calcular el area del cuadrado = b * h = lado1* Lado2
    area(){
        return this.lados*this.lados;

    }
//La formula que utilice para calcular el perimetro del cuadrado = lado1 +lado2+ lado3 +lado4
    perimetro(){
        return this.lados+this.lados+this.lados+this.lados
    } 

}

class Circulo extends FigurasGeometricas {
    constructor(radio){
        super();
        this.radio =radio;
    }
// La formula que utilice para calcular el Area del circulo = PI*radio del circulo
    area(){
        return 3.141516*this.radio*this.radio;

    }
//La formula que utilice para calcular el Perimetro del circulo = 2 veces el area del citulo = 2*PI*radio del circulo
    perimetro(){
        return 2*3.141516*this.radio;
    }        

}

class Rectangulo extends FigurasGeometricas{
    constructor(base, altura){
        super();
        this.base= base;
        this.altura=altura;
     }
//La formula que utilice para calcular el area del rectangulo = b (base) * h(altura) 
    area(){
        return this.base*this.altura;

    }
//La formula que utilice para calcular el area el perimetro = 2 veces la ( b (base) * h(altura)) 
    perimetro(){
        return 2*(this.base+this.altura)
    } 
}
// Lo primero que haremos es declarar  let  la variable y fara que funcione nuestro ejercicio la vamos a iniciar con  un valor
let cuadrado = new Cuadrado(4);

//Luego, Como ya tenemos el calculo de cada area y perimetro lo que nos resta es hacer el envio a la consola de esos resultados  
console.log(cuadrado.area());      
console.log(cuadrado.perimetro()); 
// copiamos y pegamos para todas las figuras lo mismo. 
let circulo = new Circulo(5);
console.log(circulo.area());      
console.log(circulo.perimetro()); 
// para el rectangulo se requieren dos, la base y la altura entonces se declaran dos numero al iniciar. 
let rectangulo= new Rectangulo(5,4);
console.log(rectangulo.area());      
console.log(rectangulo.perimetro()); 
