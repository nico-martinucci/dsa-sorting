"use strict";

/**
 * merge: merges two pre-sorted arrays in to one sorted array.
 * @param {array} arrA - first sorted array
 * @param {array} arrB - second sorted array
 * @returns a new, combined sorted array
 */
function merge(arrA, arrB) {
    let aPointer = 0;
    let bPointer = 0;

    let out = [];

    while (aPointer < arrA.length && bPointer < arrB.length) {
        if (arrA[aPointer] < arrB[bPointer]) {
            out.push(arrA[aPointer]);
            aPointer++;
        } else if (arrB[bPointer] <= arrA[aPointer]) {
            out.push(arrB[bPointer]);
            bPointer++;
        }
    }

    if (aPointer < arrA.length) {
        for (let i = aPointer; i < arrA.length; i++) {
            out.push(arrA[i]);
        }
    }

    if (bPointer < arrB.length) {
        for (let i = bPointer; i < arrB.length; i++) {
            out.push(arrB[i]);
        }
    }

    return out;
}

/**
 * split: splits an array into two arrays, returning them as nested arrays in
 * another array. for odd-lengthed arrays, [0] of the output array will contain
 * one extra value.
 * @param {array} arr - array to be split
 * @returns [[first half], [second half]]
 */
function split(arr) {
    return [arr.splice(0, Math.ceil(arr.length / 2)), arr];
}

/**
 * mergeSort: sorts an array using the merge sort algorithm.
 * @param {array} arr - array to be sorted 
 * @returns sorted array
 */
function mergeSort(arr) {
    if (arr.length <= 1) return arr;

    const [firstHalf, secondHalf] = split(arr);

    return merge(mergeSort(firstHalf), mergeSort(secondHalf));
}


module.exports = { merge, split, mergeSort };