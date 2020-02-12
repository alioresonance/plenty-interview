package tech.interview.qa.coding;

import java.util.Arrays;

public class Plenty {

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

    public static void check(int[] arr) {
        System.out.println( "------------------" );
        System.out.println( "input: " + Arrays.toString(arr));
        System.out.println( "result: " + Plenty.isValidIndexByValueArray(arr) );
    }

    public static void main(String[] args) {
        Plenty.check( new int[] {1, 1}          );
        Plenty.check( new int[] {3, 1, 2, -2}   );
        Plenty.check( new int[] {-1}            );
        Plenty.check( new int[] {2, 3}          );
    }

}