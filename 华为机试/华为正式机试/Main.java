public class Main {
    public static void main(String[] args) {
        int sum = 0, cnt = 0;
        for (int i = 100; i < 1000; i++) {
            if(isDaffodil(i)) {
                System.out.println("第"+(++cnt)+"个水仙花数: "+i);
                sum += i;
            }
        }
        System.out.println("水仙花数总和为: "+sum);
    }

    private static boolean isDaffodil(int num) {
        int t = num, sum = 0;
        while (t != 0) {
            int m = t % 10;
            t /= 10;
            sum += m * m * m;
        }
        return sum == num;
    }
}