//输入一个int型的正整数，计算出该int型数据在内存中存储时1的个数。
package huawei;

import java.util.Scanner;

public class Test7 {
	public static void main(String[] args) {
		Scanner in = new Scanner(System.in);
		while(in.hasNext()) {
			int n = in.nextInt();
			int m = 1;
			int result = 0;
			while(n != 0){
				if((n & m) == 1){
					result++;
				}
				n = n >> 1;
			}
			System.out.println(result);
		}
	}
}
