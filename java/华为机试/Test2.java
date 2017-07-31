//编写一个函数，计算字符串中含有的不同字符的个数。字符在ACSII码范围内(0~127)。不在范围内的不作统计。
package huawei;

import java.util.ArrayList;
import java.util.List;
import java.util.Scanner;

public class Test2 {
	public static void main(String[] args) {
		Scanner in = new Scanner(System.in);
		while(in.hasNext()){
			String str = in.nextLine();
			List<String> result = new ArrayList<String>();
			for(int i = 0;i < str.length();i++){
				if(!result.contains(str.substring(i,i+1)) && str.charAt(i) >=0 && str.charAt(i) <= 127){
					result.add(str.substring(i,i+1));
				}
			}
			System.out.println(result.size());
		}
	}
}
