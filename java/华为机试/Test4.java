//写出一个程序，接受一个字符串，然后输出该字符串反转后的字符串
package huawei;

import java.util.Scanner;

public class Test4 {
	public static void main(String[] args) {
		Scanner in = new Scanner(System.in);
		while(in.hasNext()){
			String str = in.nextLine();
			String result = "";
			for(int i = str.length() - 1; i >= 0; i--){
				result = result + str.substring(i, i + 1);
			}
			System.out.println(result);
		}
	}
}
