// public class Main {
//     public static void main(String[] args) {
//         int sum = 0, cnt = 0;
//         for (int i = 100; i < 1000; i++) {
//             if(isDaffodil(i)) {
//                 System.out.println("第"+(++cnt)+"个水仙花数: "+i);
//                 sum += i;
//             }
//         }
//         System.out.println("水仙花数总和为: "+sum);
//     }

//     private static boolean isDaffodil(int num) {
//         int t = num, sum = 0;
//         while (t != 0) {
//             int m = t % 10;
//             t /= 10;
//             sum += m * m * m;
//         }
//         return sum == num;
//     }
// }


// import java.util.Scanner
public class Main {
    private final static char[] chs = new char[]{'F', 'G', 'R', 'S', 'T', 'L', 'M', 'N', 'O', 'P', 'Q', 'W', 'X', 'Y', 'Z', 'U', 'A', 'G', 'H', 'I', 'J', 'K', 'B', 'C', 'D', 'E', 'l', 'm', 'n', 'o', 'p', 'i', 'j', 'k', 'f', 'g', 'h', 'a', 'b', 'c', 'd', 'e', 'q', 'r', 'w', 'x', 'y', 'z', 's', 't', 'u', 'v'};

    public static void main(String[] args) {
        Scanner in = new Scanner(System.in);
        String str = in.nextLine();
        String[] strs = str.split("#");
        boolean flag = true;
        StringBuilder res = new StringBuilder();
        for (String s : strs) {
            if (!s.equals("")) {
                int index = getNum(s);
                if (index < 0 || index > 51) {
                    flag = false;
                    System.out.println("ERROR");
                    break;
                } else {
                    res.append(chs[index]);
                }
            }
        }
        if (flag) System.out.println(res.toString());
    }

    private static int getNum(String s) {
        StringBuilder sb = new StringBuilder();
        for (int i = 0; i < s.length(); i++) {
            if (s.charAt(i) == '-') sb.append('0');
            if (s.charAt(i) == '.') sb.append('1');
        }
        return Integer.parseInt(sb.toString(), 2);
    }
    
}