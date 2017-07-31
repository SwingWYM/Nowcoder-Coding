
//输入一个整数，将这个整数以字符串的形式逆序输出
//程序不考虑负数的情况，若数字含有0，则逆序形式也含有0，如输入为100，则输出为001
package huawei;

import java.util.ArrayList;
import java.util.List;
import java.util.Scanner;

public class Test3 {
		public static void main(String[] args) {
			Scanner in = new Scanner(System.in);
			while(in.hasNext()){
				String a = in.nextLine();
				String b = "";
				List<String> result = new ArrayList<String>();
				for(int i = a.length() - 1;i >= 0;i--){
					b = b + a.substring(i,i + 1);
				}
				System.out.print(b);
			}
		}
}
