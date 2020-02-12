package tech.interview.qa.coding;

import java.util.Arrays;

public class Count {

    private static String sep = "------------------\n[input]\n%s\n\n[results]";

    public static void vowels(String input) {
        int a = 0, e = 0, i = 0, o = 0, u = 0;
        char[] charArray = input.toLowerCase().toCharArray();
        for (char c : charArray) {
            switch (c) {
                case 'a':
                    a++;
                    break;
                case 'e':
                    e++;
                    break;
                case 'i':
                    i++;
                    break;
                case 'o':
                    o++;
                    break;
                case 'u':
                    u++;
                    break;
                default:
                    break;   // do nothing skip
            }
        }
        System.out.println(String.format(sep, input));
        System.out.println("a: " + a);
        System.out.println("e: " + e);
        System.out.println("i: " + i);
        System.out.println("o: " + o);
        System.out.println("u: " + u);
    }

    public static void vowelA(String input) {
        int a = 0, e = 0, i = 0, o = 0, u = 0;
        char[] charArray = input.toLowerCase().toCharArray();
        for (char c : charArray) {
            switch (c) {
                case 'a':
                    a++;
                    break;
                default:
                    break;   // do nothing skip
            }
        }
        System.out.println(String.format(sep, input));
        System.out.println("a: " + a);
    }

//    {1, 1} => True
//    {3, 1, 2, -2} => True
//    {-1} => True
//    {2, 3} => False

    private static boolean isValidIndexByValueArray(int[] arr) {
        int next = 0;
        try {
            for (int i = 0; i < arr.length - 1; i++) {
                next = arr[next] + next;
                int checkIfValueExists = arr[next];
            }

        } catch (IndexOutOfBoundsException iobe) {
            return false;
        }
        return true;
    }

    public static void main(String[] args) {
        Count.vowels("The cow jumped over the moon.");
        Count.vowelA("AAAAGGTTCCCTAGCTAGCTC");

        //int[] input = new int[] {1, 1};
        //int[] input = new int[] {3, 1, 2, -2};
        //int[] input = new int[] {-1};
        int[] input = new int[]{2, 3};
        System.out.println("------------------\nCount.isValidIndexByValueArray\n");
        System.out.println("input: " + Arrays.toString(input));
        System.out.println("result: " +
                Count.isValidIndexByValueArray(input) + "\n------------------");
    }
}