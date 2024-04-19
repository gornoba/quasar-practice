<script setup>
import { colors } from 'quasar';

const { getPaletteColor } = colors;

console.log(getPaletteColor('primary')); // '#1976d2'
console.log(getPaletteColor('red-2')); // '#ffcdd2'
</script>
<template>
  <div>
    <div class="bg-primary">primary</div>
    <div class="bg-secondary">secondary</div>
    <div class="bg-accent">accent</div>
    <div class="bg-dark">dark</div>
    <div class="bg-positive">positive</div>
    <div class="bg-negative">negative</div>
    <div class="bg-info">info</div>
    <div class="bg-warning">warning</div>
  </div>
  <div>
    <div class="red">red</div>

    <div class="red-1">red-1</div>

    <div class="red-2">red-2</div>

    <div class="red-3">red-3</div>

    <div class="red-4">red-4</div>

    <div class="red-5">red-5</div>

    <div class="red-6">red-6</div>

    <div class="red-7">red-7</div>

    <div class="red-8">red-8</div>

    <div class="red-9">red-9</div>

    <div class="red-10">red-10</div>

    <div class="red-11">red-11</div>

    <div class="red-12">red-12</div>

    <div class="red-13">red-13</div>

    <div class="red-14">red-14</div>

    <div class="pink">pink</div>

    <div class="pink-1">pink-1</div>

    <div class="pink-2">pink-2</div>

    <div class="pink-3">pink-3</div>

    <div class="pink-4">pink-4</div>

    <div class="pink-5">pink-5</div>

    <div class="pink-6">pink-6</div>

    <div class="pink-7">pink-7</div>

    <div class="pink-8">pink-8</div>

    <div class="pink-9">pink-9</div>

    <div class="pink-10">pink-10</div>

    <div class="pink-11">pink-11</div>

    <div class="pink-12">pink-12</div>

    <div class="pink-13">pink-13</div>

    <div class="pink-14">pink-14</div>

    <div class="purple">purple</div>

    <div class="purple-1">purple-1</div>

    <div class="purple-2">purple-2</div>

    <div class="purple-3">purple-3</div>

    <div class="purple-4">purple-4</div>

    <div class="purple-5">purple-5</div>

    <div class="purple-6">purple-6</div>

    <div class="purple-7">purple-7</div>

    <div class="purple-8">purple-8</div>

    <div class="purple-9">purple-9</div>

    <div class="purple-10">purple-10</div>

    <div class="purple-11">purple-11</div>

    <div class="purple-12">purple-12</div>

    <div class="purple-13">purple-13</div>

    <div class="purple-14">purple-14</div>

    <div class="deep-purple">deep-purple</div>

    <div class="deep-purple-1">deep-purple-1</div>

    <div class="deep-purple-2">deep-purple-2</div>

    <div class="deep-purple-3">deep-purple-3</div>

    <div class="deep-purple-4">deep-purple-4</div>

    <div class="deep-purple-5">deep-purple-5</div>

    <div class="deep-purple-6">deep-purple-6</div>

    <div class="deep-purple-7">deep-purple-7</div>

    <div class="deep-purple-8">deep-purple-8</div>

    <div class="deep-purple-9">deep-purple-9</div>

    <div class="deep-purple-10">deep-purple-10</div>

    <div class="deep-purple-11">deep-purple-11</div>

    <div class="deep-purple-12">deep-purple-12</div>

    <div class="deep-purple-13">deep-purple-13</div>

    <div class="deep-purple-14">deep-purple-14</div>

    <div class="indigo">indigo</div>

    <div class="indigo-1">indigo-1</div>

    <div class="indigo-2">indigo-2</div>

    <div class="indigo-3">indigo-3</div>

    <div class="indigo-4">indigo-4</div>

    <div class="indigo-5">indigo-5</div>

    <div class="indigo-6">indigo-6</div>

    <div class="indigo-7">indigo-7</div>

    <div class="indigo-8">indigo-8</div>

    <div class="indigo-9">indigo-9</div>

    <div class="indigo-10">indigo-10</div>

    <div class="indigo-11">indigo-11</div>

    <div class="indigo-12">indigo-12</div>

    <div class="indigo-13">indigo-13</div>

    <div class="indigo-14">indigo-14</div>

    <div class="blue">blue</div>

    <div class="blue-1">blue-1</div>

    <div class="blue-2">blue-2</div>

    <div class="blue-3">blue-3</div>

    <div class="blue-4">blue-4</div>

    <div class="blue-5">blue-5</div>

    <div class="blue-6">blue-6</div>

    <div class="blue-7">blue-7</div>

    <div class="blue-8">blue-8</div>

    <div class="blue-9">blue-9</div>

    <div class="blue-10">blue-10</div>

    <div class="blue-11">blue-11</div>

    <div class="blue-12">blue-12</div>

    <div class="blue-13">blue-13</div>

    <div class="blue-14">blue-14</div>

    <div class="light-blue">light-blue</div>

    <div class="light-blue-1">light-blue-1</div>

    <div class="light-blue-2">light-blue-2</div>

    <div class="light-blue-3">light-blue-3</div>

    <div class="light-blue-4">light-blue-4</div>

    <div class="light-blue-5">light-blue-5</div>

    <div class="light-blue-6">light-blue-6</div>

    <div class="light-blue-7">light-blue-7</div>

    <div class="light-blue-8">light-blue-8</div>

    <div class="light-blue-9">light-blue-9</div>

    <div class="light-blue-10">light-blue-10</div>

    <div class="light-blue-11">light-blue-11</div>

    <div class="light-blue-12">light-blue-12</div>

    <div class="light-blue-13">light-blue-13</div>

    <div class="light-blue-14">light-blue-14</div>

    <div class="cyan">cyan</div>

    <div class="cyan-1">cyan-1</div>

    <div class="cyan-2">cyan-2</div>

    <div class="cyan-3">cyan-3</div>

    <div class="cyan-4">cyan-4</div>

    <div class="cyan-5">cyan-5</div>

    <div class="cyan-6">cyan-6</div>

    <div class="cyan-7">cyan-7</div>

    <div class="cyan-8">cyan-8</div>

    <div class="cyan-9">cyan-9</div>

    <div class="cyan-10">cyan-10</div>

    <div class="cyan-11">cyan-11</div>

    <div class="cyan-12">cyan-12</div>

    <div class="cyan-13">cyan-13</div>

    <div class="cyan-14">cyan-14</div>

    <div class="teal">teal</div>

    <div class="teal-1">teal-1</div>

    <div class="teal-2">teal-2</div>

    <div class="teal-3">teal-3</div>

    <div class="teal-4">teal-4</div>

    <div class="teal-5">teal-5</div>

    <div class="teal-6">teal-6</div>

    <div class="teal-7">teal-7</div>

    <div class="teal-8">teal-8</div>

    <div class="teal-9">teal-9</div>

    <div class="teal-10">teal-10</div>

    <div class="teal-11">teal-11</div>

    <div class="teal-12">teal-12</div>

    <div class="teal-13">teal-13</div>

    <div class="teal-14">teal-14</div>

    <div class="green">green</div>

    <div class="green-1">green-1</div>

    <div class="green-2">green-2</div>

    <div class="green-3">green-3</div>

    <div class="green-4">green-4</div>

    <div class="green-5">green-5</div>

    <div class="green-6">green-6</div>

    <div class="green-7">green-7</div>

    <div class="green-8">green-8</div>

    <div class="green-9">green-9</div>

    <div class="green-10">green-10</div>

    <div class="green-11">green-11</div>

    <div class="green-12">green-12</div>

    <div class="green-13">green-13</div>

    <div class="green-14">green-14</div>

    <div class="light-green">light-green</div>

    <div class="light-green-1">light-green-1</div>

    <div class="light-green-2">light-green-2</div>

    <div class="light-green-3">light-green-3</div>

    <div class="light-green-4">light-green-4</div>

    <div class="light-green-5">light-green-5</div>

    <div class="light-green-6">light-green-6</div>

    <div class="light-green-7">light-green-7</div>

    <div class="light-green-8">light-green-8</div>

    <div class="light-green-9">light-green-9</div>

    <div class="light-green-10">light-green-10</div>

    <div class="light-green-11">light-green-11</div>

    <div class="light-green-12">light-green-12</div>

    <div class="light-green-13">light-green-13</div>

    <div class="light-green-14">light-green-14</div>

    <div class="lime">lime</div>

    <div class="lime-1">lime-1</div>

    <div class="lime-2">lime-2</div>

    <div class="lime-3">lime-3</div>

    <div class="lime-4">lime-4</div>

    <div class="lime-5">lime-5</div>

    <div class="lime-6">lime-6</div>

    <div class="lime-7">lime-7</div>

    <div class="lime-8">lime-8</div>

    <div class="lime-9">lime-9</div>

    <div class="lime-10">lime-10</div>

    <div class="lime-11">lime-11</div>

    <div class="lime-12">lime-12</div>

    <div class="lime-13">lime-13</div>

    <div class="lime-14">lime-14</div>

    <div class="yellow">yellow</div>

    <div class="yellow-1">yellow-1</div>

    <div class="yellow-2">yellow-2</div>

    <div class="yellow-3">yellow-3</div>

    <div class="yellow-4">yellow-4</div>

    <div class="yellow-5">yellow-5</div>

    <div class="yellow-6">yellow-6</div>

    <div class="yellow-7">yellow-7</div>

    <div class="yellow-8">yellow-8</div>

    <div class="yellow-9">yellow-9</div>

    <div class="yellow-10">yellow-10</div>

    <div class="yellow-11">yellow-11</div>

    <div class="yellow-12">yellow-12</div>

    <div class="yellow-13">yellow-13</div>

    <div class="yellow-14">yellow-14</div>

    <div class="amber">amber</div>

    <div class="amber-1">amber-1</div>

    <div class="amber-2">amber-2</div>

    <div class="amber-3">amber-3</div>

    <div class="amber-4">amber-4</div>

    <div class="amber-5">amber-5</div>

    <div class="amber-6">amber-6</div>

    <div class="amber-7">amber-7</div>

    <div class="amber-8">amber-8</div>

    <div class="amber-9">amber-9</div>

    <div class="amber-10">amber-10</div>

    <div class="amber-11">amber-11</div>

    <div class="amber-12">amber-12</div>

    <div class="amber-13">amber-13</div>

    <div class="amber-14">amber-14</div>

    <div class="orange">orange</div>

    <div class="orange-1">orange-1</div>

    <div class="orange-2">orange-2</div>

    <div class="orange-3">orange-3</div>

    <div class="orange-4">orange-4</div>

    <div class="orange-5">orange-5</div>

    <div class="orange-6">orange-6</div>

    <div class="orange-7">orange-7</div>

    <div class="orange-8">orange-8</div>

    <div class="orange-9">orange-9</div>

    <div class="orange-10">orange-10</div>

    <div class="orange-11">orange-11</div>

    <div class="orange-12">orange-12</div>

    <div class="orange-13">orange-13</div>

    <div class="orange-14">orange-14</div>

    <div class="deep-orange">deep-orange</div>

    <div class="deep-orange-1">deep-orange-1</div>

    <div class="deep-orange-2">deep-orange-2</div>

    <div class="deep-orange-3">deep-orange-3</div>

    <div class="deep-orange-4">deep-orange-4</div>

    <div class="deep-orange-5">deep-orange-5</div>

    <div class="deep-orange-6">deep-orange-6</div>

    <div class="deep-orange-7">deep-orange-7</div>

    <div class="deep-orange-8">deep-orange-8</div>

    <div class="deep-orange-9">deep-orange-9</div>

    <div class="deep-orange-10">deep-orange-10</div>

    <div class="deep-orange-11">deep-orange-11</div>

    <div class="deep-orange-12">deep-orange-12</div>

    <div class="deep-orange-13">deep-orange-13</div>

    <div class="deep-orange-14">deep-orange-14</div>

    <div class="brown">brown</div>

    <div class="brown-1">brown-1</div>

    <div class="brown-2">brown-2</div>

    <div class="brown-3">brown-3</div>

    <div class="brown-4">brown-4</div>

    <div class="brown-5">brown-5</div>

    <div class="brown-6">brown-6</div>

    <div class="brown-7">brown-7</div>

    <div class="brown-8">brown-8</div>

    <div class="brown-9">brown-9</div>

    <div class="brown-10">brown-10</div>

    <div class="brown-11">brown-11</div>

    <div class="brown-12">brown-12</div>

    <div class="brown-13">brown-13</div>

    <div class="brown-14">brown-14</div>

    <div class="grey">grey</div>

    <div class="grey-1">grey-1</div>

    <div class="grey-2">grey-2</div>

    <div class="grey-3">grey-3</div>

    <div class="grey-4">grey-4</div>

    <div class="grey-5">grey-5</div>

    <div class="grey-6">grey-6</div>

    <div class="grey-7">grey-7</div>

    <div class="grey-8">grey-8</div>

    <div class="grey-9">grey-9</div>

    <div class="grey-10">grey-10</div>

    <div class="grey-11">grey-11</div>

    <div class="grey-12">grey-12</div>

    <div class="grey-13">grey-13</div>

    <div class="grey-14">grey-14</div>

    <div class="blue-grey">blue-grey</div>

    <div class="blue-grey-1">blue-grey-1</div>

    <div class="blue-grey-2">blue-grey-2</div>

    <div class="blue-grey-3">blue-grey-3</div>

    <div class="blue-grey-4">blue-grey-4</div>

    <div class="blue-grey-5">blue-grey-5</div>

    <div class="blue-grey-6">blue-grey-6</div>

    <div class="blue-grey-7">blue-grey-7</div>

    <div class="blue-grey-8">blue-grey-8</div>

    <div class="blue-grey-9">blue-grey-9</div>

    <div class="blue-grey-10">blue-grey-10</div>

    <div class="blue-grey-11">blue-grey-11</div>

    <div class="blue-grey-12">blue-grey-12</div>

    <div class="blue-grey-13">blue-grey-13</div>

    <div class="blue-grey-14">blue-grey-14</div>
  </div>
</template>

<style lang="scss" scoped>
.red {
  background-color: $red;
}
.red-1 {
  background-color: $red-1;
}
.red-2 {
  background-color: $red-2;
}
.red-3 {
  background-color: $red-3;
}
.red-4 {
  background-color: $red-4;
}
.red-5 {
  background-color: $red-5;
}
.red-6 {
  background-color: $red-6;
}
.red-7 {
  background-color: $red-7;
}
.red-8 {
  background-color: $red-8;
}
.red-9 {
  background-color: $red-9;
}
.red-10 {
  background-color: $red-10;
}
.red-11 {
  background-color: $red-11;
}
.red-12 {
  background-color: $red-12;
}
.red-13 {
  background-color: $red-13;
}
.red-14 {
  background-color: $red-14;
}
.pink {
  background-color: $pink;
}
.pink-1 {
  background-color: $pink-1;
}
.pink-2 {
  background-color: $pink-2;
}
.pink-3 {
  background-color: $pink-3;
}
.pink-4 {
  background-color: $pink-4;
}
.pink-5 {
  background-color: $pink-5;
}
.pink-6 {
  background-color: $pink-6;
}
.pink-7 {
  background-color: $pink-7;
}
.pink-8 {
  background-color: $pink-8;
}
.pink-9 {
  background-color: $pink-9;
}
.pink-10 {
  background-color: $pink-10;
}
.pink-11 {
  background-color: $pink-11;
}
.pink-12 {
  background-color: $pink-12;
}
.pink-13 {
  background-color: $pink-13;
}
.pink-14 {
  background-color: $pink-14;
}
.purple {
  background-color: $purple;
}
.purple-1 {
  background-color: $purple-1;
}
.purple-2 {
  background-color: $purple-2;
}
.purple-3 {
  background-color: $purple-3;
}
.purple-4 {
  background-color: $purple-4;
}
.purple-5 {
  background-color: $purple-5;
}
.purple-6 {
  background-color: $purple-6;
}
.purple-7 {
  background-color: $purple-7;
}
.purple-8 {
  background-color: $purple-8;
}
.purple-9 {
  background-color: $purple-9;
}
.purple-10 {
  background-color: $purple-10;
}
.purple-11 {
  background-color: $purple-11;
}
.purple-12 {
  background-color: $purple-12;
}
.purple-13 {
  background-color: $purple-13;
}
.purple-14 {
  background-color: $purple-14;
}
.deep-purple {
  background-color: $deep-purple;
}
.deep-purple-1 {
  background-color: $deep-purple-1;
}
.deep-purple-2 {
  background-color: $deep-purple-2;
}
.deep-purple-3 {
  background-color: $deep-purple-3;
}
.deep-purple-4 {
  background-color: $deep-purple-4;
}
.deep-purple-5 {
  background-color: $deep-purple-5;
}
.deep-purple-6 {
  background-color: $deep-purple-6;
}
.deep-purple-7 {
  background-color: $deep-purple-7;
}
.deep-purple-8 {
  background-color: $deep-purple-8;
}
.deep-purple-9 {
  background-color: $deep-purple-9;
}
.deep-purple-10 {
  background-color: $deep-purple-10;
}
.deep-purple-11 {
  background-color: $deep-purple-11;
}
.deep-purple-12 {
  background-color: $deep-purple-12;
}
.deep-purple-13 {
  background-color: $deep-purple-13;
}
.deep-purple-14 {
  background-color: $deep-purple-14;
}
.indigo {
  background-color: $indigo;
}
.indigo-1 {
  background-color: $indigo-1;
}
.indigo-2 {
  background-color: $indigo-2;
}
.indigo-3 {
  background-color: $indigo-3;
}
.indigo-4 {
  background-color: $indigo-4;
}
.indigo-5 {
  background-color: $indigo-5;
}
.indigo-6 {
  background-color: $indigo-6;
}
.indigo-7 {
  background-color: $indigo-7;
}
.indigo-8 {
  background-color: $indigo-8;
}
.indigo-9 {
  background-color: $indigo-9;
}
.indigo-10 {
  background-color: $indigo-10;
}
.indigo-11 {
  background-color: $indigo-11;
}
.indigo-12 {
  background-color: $indigo-12;
}
.indigo-13 {
  background-color: $indigo-13;
}
.indigo-14 {
  background-color: $indigo-14;
}
.blue {
  background-color: $blue;
}
.blue-1 {
  background-color: $blue-1;
}
.blue-2 {
  background-color: $blue-2;
}
.blue-3 {
  background-color: $blue-3;
}
.blue-4 {
  background-color: $blue-4;
}
.blue-5 {
  background-color: $blue-5;
}
.blue-6 {
  background-color: $blue-6;
}
.blue-7 {
  background-color: $blue-7;
}
.blue-8 {
  background-color: $blue-8;
}
.blue-9 {
  background-color: $blue-9;
}
.blue-10 {
  background-color: $blue-10;
}
.blue-11 {
  background-color: $blue-11;
}
.blue-12 {
  background-color: $blue-12;
}
.blue-13 {
  background-color: $blue-13;
}
.blue-14 {
  background-color: $blue-14;
}
.light-blue {
  background-color: $light-blue;
}
.light-blue-1 {
  background-color: $light-blue-1;
}
.light-blue-2 {
  background-color: $light-blue-2;
}
.light-blue-3 {
  background-color: $light-blue-3;
}
.light-blue-4 {
  background-color: $light-blue-4;
}
.light-blue-5 {
  background-color: $light-blue-5;
}
.light-blue-6 {
  background-color: $light-blue-6;
}
.light-blue-7 {
  background-color: $light-blue-7;
}
.light-blue-8 {
  background-color: $light-blue-8;
}
.light-blue-9 {
  background-color: $light-blue-9;
}
.light-blue-10 {
  background-color: $light-blue-10;
}
.light-blue-11 {
  background-color: $light-blue-11;
}
.light-blue-12 {
  background-color: $light-blue-12;
}
.light-blue-13 {
  background-color: $light-blue-13;
}
.light-blue-14 {
  background-color: $light-blue-14;
}
.cyan {
  background-color: $cyan;
}
.cyan-1 {
  background-color: $cyan-1;
}
.cyan-2 {
  background-color: $cyan-2;
}
.cyan-3 {
  background-color: $cyan-3;
}
.cyan-4 {
  background-color: $cyan-4;
}
.cyan-5 {
  background-color: $cyan-5;
}
.cyan-6 {
  background-color: $cyan-6;
}
.cyan-7 {
  background-color: $cyan-7;
}
.cyan-8 {
  background-color: $cyan-8;
}
.cyan-9 {
  background-color: $cyan-9;
}
.cyan-10 {
  background-color: $cyan-10;
}
.cyan-11 {
  background-color: $cyan-11;
}
.cyan-12 {
  background-color: $cyan-12;
}
.cyan-13 {
  background-color: $cyan-13;
}
.cyan-14 {
  background-color: $cyan-14;
}
.teal {
  background-color: $teal;
}
.teal-1 {
  background-color: $teal-1;
}
.teal-2 {
  background-color: $teal-2;
}
.teal-3 {
  background-color: $teal-3;
}
.teal-4 {
  background-color: $teal-4;
}
.teal-5 {
  background-color: $teal-5;
}
.teal-6 {
  background-color: $teal-6;
}
.teal-7 {
  background-color: $teal-7;
}
.teal-8 {
  background-color: $teal-8;
}
.teal-9 {
  background-color: $teal-9;
}
.teal-10 {
  background-color: $teal-10;
}
.teal-11 {
  background-color: $teal-11;
}
.teal-12 {
  background-color: $teal-12;
}
.teal-13 {
  background-color: $teal-13;
}
.teal-14 {
  background-color: $teal-14;
}
.green {
  background-color: $green;
}
.green-1 {
  background-color: $green-1;
}
.green-2 {
  background-color: $green-2;
}
.green-3 {
  background-color: $green-3;
}
.green-4 {
  background-color: $green-4;
}
.green-5 {
  background-color: $green-5;
}
.green-6 {
  background-color: $green-6;
}
.green-7 {
  background-color: $green-7;
}
.green-8 {
  background-color: $green-8;
}
.green-9 {
  background-color: $green-9;
}
.green-10 {
  background-color: $green-10;
}
.green-11 {
  background-color: $green-11;
}
.green-12 {
  background-color: $green-12;
}
.green-13 {
  background-color: $green-13;
}
.green-14 {
  background-color: $green-14;
}
.light-green {
  background-color: $light-green;
}
.light-green-1 {
  background-color: $light-green-1;
}
.light-green-2 {
  background-color: $light-green-2;
}
.light-green-3 {
  background-color: $light-green-3;
}
.light-green-4 {
  background-color: $light-green-4;
}
.light-green-5 {
  background-color: $light-green-5;
}
.light-green-6 {
  background-color: $light-green-6;
}
.light-green-7 {
  background-color: $light-green-7;
}
.light-green-8 {
  background-color: $light-green-8;
}
.light-green-9 {
  background-color: $light-green-9;
}
.light-green-10 {
  background-color: $light-green-10;
}
.light-green-11 {
  background-color: $light-green-11;
}
.light-green-12 {
  background-color: $light-green-12;
}
.light-green-13 {
  background-color: $light-green-13;
}
.light-green-14 {
  background-color: $light-green-14;
}
.lime {
  background-color: $lime;
}
.lime-1 {
  background-color: $lime-1;
}
.lime-2 {
  background-color: $lime-2;
}
.lime-3 {
  background-color: $lime-3;
}
.lime-4 {
  background-color: $lime-4;
}
.lime-5 {
  background-color: $lime-5;
}
.lime-6 {
  background-color: $lime-6;
}
.lime-7 {
  background-color: $lime-7;
}
.lime-8 {
  background-color: $lime-8;
}
.lime-9 {
  background-color: $lime-9;
}
.lime-10 {
  background-color: $lime-10;
}
.lime-11 {
  background-color: $lime-11;
}
.lime-12 {
  background-color: $lime-12;
}
.lime-13 {
  background-color: $lime-13;
}
.lime-14 {
  background-color: $lime-14;
}
.yellow {
  background-color: $yellow;
}
.yellow-1 {
  background-color: $yellow-1;
}
.yellow-2 {
  background-color: $yellow-2;
}
.yellow-3 {
  background-color: $yellow-3;
}
.yellow-4 {
  background-color: $yellow-4;
}
.yellow-5 {
  background-color: $yellow-5;
}
.yellow-6 {
  background-color: $yellow-6;
}
.yellow-7 {
  background-color: $yellow-7;
}
.yellow-8 {
  background-color: $yellow-8;
}
.yellow-9 {
  background-color: $yellow-9;
}
.yellow-10 {
  background-color: $yellow-10;
}
.yellow-11 {
  background-color: $yellow-11;
}
.yellow-12 {
  background-color: $yellow-12;
}
.yellow-13 {
  background-color: $yellow-13;
}
.yellow-14 {
  background-color: $yellow-14;
}
.amber {
  background-color: $amber;
}
.amber-1 {
  background-color: $amber-1;
}
.amber-2 {
  background-color: $amber-2;
}
.amber-3 {
  background-color: $amber-3;
}
.amber-4 {
  background-color: $amber-4;
}
.amber-5 {
  background-color: $amber-5;
}
.amber-6 {
  background-color: $amber-6;
}
.amber-7 {
  background-color: $amber-7;
}
.amber-8 {
  background-color: $amber-8;
}
.amber-9 {
  background-color: $amber-9;
}
.amber-10 {
  background-color: $amber-10;
}
.amber-11 {
  background-color: $amber-11;
}
.amber-12 {
  background-color: $amber-12;
}
.amber-13 {
  background-color: $amber-13;
}
.amber-14 {
  background-color: $amber-14;
}
.orange {
  background-color: $orange;
}
.orange-1 {
  background-color: $orange-1;
}
.orange-2 {
  background-color: $orange-2;
}
.orange-3 {
  background-color: $orange-3;
}
.orange-4 {
  background-color: $orange-4;
}
.orange-5 {
  background-color: $orange-5;
}
.orange-6 {
  background-color: $orange-6;
}
.orange-7 {
  background-color: $orange-7;
}
.orange-8 {
  background-color: $orange-8;
}
.orange-9 {
  background-color: $orange-9;
}
.orange-10 {
  background-color: $orange-10;
}
.orange-11 {
  background-color: $orange-11;
}
.orange-12 {
  background-color: $orange-12;
}
.orange-13 {
  background-color: $orange-13;
}
.orange-14 {
  background-color: $orange-14;
}
.deep-orange {
  background-color: $deep-orange;
}
.deep-orange-1 {
  background-color: $deep-orange-1;
}
.deep-orange-2 {
  background-color: $deep-orange-2;
}
.deep-orange-3 {
  background-color: $deep-orange-3;
}
.deep-orange-4 {
  background-color: $deep-orange-4;
}
.deep-orange-5 {
  background-color: $deep-orange-5;
}
.deep-orange-6 {
  background-color: $deep-orange-6;
}
.deep-orange-7 {
  background-color: $deep-orange-7;
}
.deep-orange-8 {
  background-color: $deep-orange-8;
}
.deep-orange-9 {
  background-color: $deep-orange-9;
}
.deep-orange-10 {
  background-color: $deep-orange-10;
}
.deep-orange-11 {
  background-color: $deep-orange-11;
}
.deep-orange-12 {
  background-color: $deep-orange-12;
}
.deep-orange-13 {
  background-color: $deep-orange-13;
}
.deep-orange-14 {
  background-color: $deep-orange-14;
}
.brown {
  background-color: $brown;
}
.brown-1 {
  background-color: $brown-1;
}
.brown-2 {
  background-color: $brown-2;
}
.brown-3 {
  background-color: $brown-3;
}
.brown-4 {
  background-color: $brown-4;
}
.brown-5 {
  background-color: $brown-5;
}
.brown-6 {
  background-color: $brown-6;
}
.brown-7 {
  background-color: $brown-7;
}
.brown-8 {
  background-color: $brown-8;
}
.brown-9 {
  background-color: $brown-9;
}
.brown-10 {
  background-color: $brown-10;
}
.brown-11 {
  background-color: $brown-11;
}
.brown-12 {
  background-color: $brown-12;
}
.brown-13 {
  background-color: $brown-13;
}
.brown-14 {
  background-color: $brown-14;
}
.grey {
  background-color: $grey;
}
.grey-1 {
  background-color: $grey-1;
}
.grey-2 {
  background-color: $grey-2;
}
.grey-3 {
  background-color: $grey-3;
}
.grey-4 {
  background-color: $grey-4;
}
.grey-5 {
  background-color: $grey-5;
}
.grey-6 {
  background-color: $grey-6;
}
.grey-7 {
  background-color: $grey-7;
}
.grey-8 {
  background-color: $grey-8;
}
.grey-9 {
  background-color: $grey-9;
}
.grey-10 {
  background-color: $grey-10;
}
.grey-11 {
  background-color: $grey-11;
}
.grey-12 {
  background-color: $grey-12;
}
.grey-13 {
  background-color: $grey-13;
}
.grey-14 {
  background-color: $grey-14;
}
.blue-grey {
  background-color: $blue-grey;
}
.blue-grey-1 {
  background-color: $blue-grey-1;
}
.blue-grey-2 {
  background-color: $blue-grey-2;
}
.blue-grey-3 {
  background-color: $blue-grey-3;
}
.blue-grey-4 {
  background-color: $blue-grey-4;
}
.blue-grey-5 {
  background-color: $blue-grey-5;
}
.blue-grey-6 {
  background-color: $blue-grey-6;
}
.blue-grey-7 {
  background-color: $blue-grey-7;
}
.blue-grey-8 {
  background-color: $blue-grey-8;
}
.blue-grey-9 {
  background-color: $blue-grey-9;
}
.blue-grey-10 {
  background-color: $blue-grey-10;
}
.blue-grey-11 {
  background-color: $blue-grey-11;
}
.blue-grey-12 {
  background-color: $blue-grey-12;
}
.blue-grey-13 {
  background-color: $blue-grey-13;
}
.blue-grey-14 {
  background-color: $blue-grey-14;
}
</style>
