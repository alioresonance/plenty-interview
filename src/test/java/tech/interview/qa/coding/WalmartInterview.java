package tech.interview.qa.coding;

public class WalmartInterview {
    // input  = "i_love_how_to_learn_testing"
// filter = "i", "o", "u", "e", "a"
// return = "_lv_hw_t_lrnts_tsng"
    public static void main(String[] args) {
        String inputString = "i_love_how_to_learn_testing";
        char[] filterList = {'i', 'o', 'u', 'e', 'a'};
        System.out.println(
                "input => " + inputString + "\n" +
                        "results => " + WalmartInterview.removeChars(inputString, filterList)
        );
    }

    public static String removeChars(String inputString, char[] filterList) {
        String result = "";
        char[] charArray = inputString.toCharArray();
        for (char c : charArray)
            if (!inList(c, filterList))
                result += c;
        return result;
    }

    public static boolean inList(char inputChar, char[] filterList) {
        for (char isInTheList : filterList)
            if (inputChar == isInTheList)
                return true;
        return false;
    }
}