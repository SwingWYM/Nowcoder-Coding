//给定n个字符串，请对n个字符串按照字典序排列。
package huawei;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;
import java.util.Scanner;

public class Test6 {
	public static void main(String[] args) {
		Scanner in = new Scanner(System.in);
		while(in.hasNext()) {
			int n = Integer.parseInt(in.nextLine());
			List<String> result = new ArrayList<String>();
			for(int i = 0; i < n; i++){
				String a = in.nextLine();
				result.add(a);
			}
			Collections.sort(result);
			for(int i = 0; i < n; i++){
				System.out.println(result.get(i));
			}
		}
	}
}
